import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import {
  readJson,
  resolveOptionOrder,
  collectTestSources,
  expectedGroupName,
  writeJson,
} from './verify-matrix-core.js';

/**
 * Shared utilities for test-coverage.js scripts
 */

export function normalizeBoolean(value) {
  if (value === true || value === 'true' || value === '✓') {
    return true;
  }
  if (value === false || value === 'false' || value === '✗') {
    return false;
  }
  return Boolean(value);
}

export function scanTestSources(testSources, tagPatterns) {
  const { jsxRegex, selectorRegex } = tagPatterns;
  
  // Scan for JSX tags
  const jsxTags = new Set();
  let jsxMatch;
  while ((jsxMatch = jsxRegex.exec(testSources)) !== null) {
    const tag = (jsxMatch[1] || '').trim();
    if (tag) jsxTags.add(tag);
  }

  // Scan for selector usage (if provided)
  const selectorTags = new Set();
  if (selectorRegex) {
    let selectorMatch;
    while ((selectorMatch = selectorRegex.exec(testSources)) !== null) {
      const tag = (selectorMatch[1] || '').trim();
      if (tag) selectorTags.add(tag);
    }
  }

  return new Set([...jsxTags, ...selectorTags]);
}

export function calculateStats(items) {
  const testedCount = items.filter(item => item.tested).length;
  return {
    totalPermutations: items.length,
    testedPermutations: testedCount,
    percentTested: items.length ? ((testedCount / items.length) * 100).toFixed(2) : '0.00',
  };
}

export function calculateTestCaseStatus(items, testDir) {
  // Collect all case IDs that appear in the data
  const allCaseIds = new Set();
  items.forEach(item => {
    if (item.caseIds) {
      item.caseIds.forEach(id => allCaseIds.add(id));
    }
  });

  // Check if WDIO tests exist
  const testsExist = checkWdioTestsExist(testDir);

  // For each case ID, calculate implementation status
  const testCaseStatus = {};
  Array.from(allCaseIds).sort((a, b) => a - b).forEach(caseId => {
    const componentsWithCase = items.filter(item => 
      item.caseIds && item.caseIds.includes(caseId)
    );
    
    const hasComponents = componentsWithCase.length > 0;
    const hasWdioTest = testsExist && checkTestCaseExists(testDir, caseId);
    const testCount = hasWdioTest ? countTestsForCase(testDir, caseId) : 0;
    
    testCaseStatus[caseId] = {
      implemented: hasComponents && hasWdioTest,
      componentCount: componentsWithCase.length,
      testCount,
      hasComponents,
      hasWdioTest,
      manual: false, // Auto-scanned test cases are not manual
      components: componentsWithCase.map(item => ({
        tag: item.tag,
        group: item.group,
        optionsKey: item.optionsKey
      }))
    };
  });

  return testCaseStatus;
}

function checkWdioTestsExist(testDir) {
  if (!testDir || !fs.existsSync(testDir)) return false;
  const testsFile = path.resolve(testDir, 'tests.tsx');
  return fs.existsSync(testsFile);
}

function checkTestCaseExists(testDir, caseId) {
  if (!testDir || !fs.existsSync(testDir)) return false;
  const testsFile = path.resolve(testDir, 'tests.tsx');
  if (!fs.existsSync(testsFile)) return false;
  
  try {
    const content = fs.readFileSync(testsFile, 'utf8');
    // Look for "Test Case #N" in describe blocks
    const regex = new RegExp(`Test Case #${caseId}\\b`, 'i');
    return regex.test(content);
  } catch (error) {
    return false;
  }
}

/**
 * Count it() test cases within a specific "Test Case #N" describe block
 */
function countTestsForCase(testDir, caseId) {
  if (!testDir || !fs.existsSync(testDir)) return 0;
  const testsFile = path.resolve(testDir, 'tests.tsx');
  if (!fs.existsSync(testsFile)) return 0;
  
  try {
    const content = fs.readFileSync(testsFile, 'utf8');
    
    // Find the start of the describe block for this test case
    // Match: describe('Test Case #N ...', () => {
    const startRegex = new RegExp(`describe\\s*\\(\\s*['"]Test Case #${caseId}\\b`, 'i');
    const startMatch = content.match(startRegex);
    if (!startMatch) return 0;
    
    // The regex matches: describe\s*\(\s*['"]Test Case #N
    // Extract the quote character from the match
    const matchText = startMatch[0];
    const quoteMatch = matchText.match(/['"]/);
    if (!quoteMatch) return 0;
    const stringStartChar = quoteMatch[0];
    
    // Find where the string content starts (after the quote in the match)
    const quotePosInMatch = matchText.indexOf(stringStartChar);
    const stringStartInContent = startMatch.index + quotePosInMatch + 1;
    
    // Find the closing quote (handle escaped quotes)
    let i = stringStartInContent;
    while (i < content.length) {
      if (content[i] === stringStartChar && content[i - 1] !== '\\') {
        break;
      }
      i++;
    }
    
    if (i >= content.length) return 0;
    
    // Now find the closing paren and then the opening brace
    i++; // Move past the closing quote
    while (i < content.length && content[i] !== ')') {
      i++;
    }
    
    if (i >= content.length) return 0;
    i++; // Move past the closing paren
    
    // Find the opening brace
    while (i < content.length && content[i] !== '{') {
      i++;
    }
    
    if (i >= content.length) return 0;
    
    const startIndex = i + 1; // Start after the opening brace
    
    // Find the matching closing brace for this describe block
    let braceCount = 1;
    let inString = false;
    let stringChar = null;
    i = startIndex;
    
    while (i < content.length && braceCount > 0) {
      const char = content[i];
      const prevChar = i > 0 ? content[i - 1] : '';
      
      // Handle string literals (skip braces inside strings)
      if (!inString && (char === '"' || char === "'" || char === '`')) {
        inString = true;
        stringChar = char;
      } else if (inString && char === stringChar && prevChar !== '\\') {
        inString = false;
        stringChar = null;
      }
      
      // Only count braces outside of strings
      if (!inString) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
      }
      
      i++;
    }
    
    if (braceCount === 0) {
      // Extract the content of the describe block
      const blockContent = content.substring(startIndex, i - 1);
      // Count it() calls within this block
      const itMatches = blockContent.match(/\bit\s*\(/g);
      return itMatches ? itMatches.length : 0;
    }
    
    return 0;
  } catch (error) {
    return 0;
  }
}

export function cleanupLegacyFiles(baseDir) {
  const legacyFiles = [
    path.resolve(baseDir, 'coverage-data.json'),
    path.resolve(baseDir, 'coverage-overlay.json'),
  ];
  
  for (const filePath of legacyFiles) {
    if (fs.existsSync(filePath)) {
      try { 
        fs.unlinkSync(filePath); 
      } catch (error) {
        // Ignore cleanup errors
      }
    }
  }
}

/**
 * Main test coverage analysis orchestrator
 */
export function generateTestCoverage({
  // Paths
  rulesPath,
  dataPath,
  testDir,
  outPath,
  
  // Decorator config
  decorator,
  tagPatterns,
  
  // Decorator-specific functions
  mapOptions,
  assignCaseIds,
  
  // Optional
  useRules = true
}) {
  const rules = useRules ? readJson(rulesPath) : null;
  const data = readJson(dataPath);
  const optionOrder = useRules ? resolveOptionOrder(decorator, rules) : null;
  
  // Collect and scan test sources
  const testSources = collectTestSources(testDir);
  const testedTags = scanTestSources(testSources, tagPatterns);
  
  // Process each permutation
  const items = data.coveredPermutations.map(permutation => {
    const files = permutation.files || [];
    const primary = files[0] || null;
    const baseName = primary ? path.basename(primary, path.extname(primary)) : null;
    const tag = baseName || null;
    
    // Use decorator-specific option mapping
    const options = mapOptions(permutation);
    
    const tested = Boolean(tag && testedTags.has(tag));
    const group = useRules ? expectedGroupName(permutation.options, rules, optionOrder) : options.type || permutation.options?.[0];
    
    // Use decorator-specific case ID assignment
    const caseIds = assignCaseIds(options, group, permutation);
    
    return {
      group,
      options,
      optionsKey: (permutation.options || []).join('|'),
      files,
      tag,
      tested,
      caseIds,
      ...(tested && { testedBy: caseIds.map(id => `Test Case #${id}`) })
    };
  });
  
  // Calculate statistics
  const stats = calculateStats(items);
  
  // Calculate test case implementation status
  const testCaseStatus = calculateTestCaseStatus(items, testDir);
  
  // Preserve manually tracked test cases from existing file (for test cases outside main folder)
  let existingCoverage = {};
  if (fs.existsSync(outPath)) {
    try {
      existingCoverage = readJson(outPath);
      // Merge manually tracked test cases (those marked with manual: true)
      if (existingCoverage.testCaseStatus) {
        Object.keys(existingCoverage.testCaseStatus).forEach(caseId => {
          const existingCase = existingCoverage.testCaseStatus[caseId];
          // Preserve if explicitly marked as manual
          // Backward compatibility: if manual flag is missing and not in auto-scanned, preserve it
          // (for decorators that haven't been updated to use manual flag yet)
          if (existingCase.manual === true || 
              (existingCase.manual !== false && !(caseId in testCaseStatus))) {
            // Preserve manually tracked test case
            testCaseStatus[caseId] = existingCase;
          }
        });
      }
      // Merge manually tracked items (those not in automatically scanned items)
      if (existingCoverage.items) {
        const autoScannedTags = new Set(items.map(item => item.tag).filter(Boolean));
        existingCoverage.items.forEach(existingItem => {
          if (existingItem.tag && !autoScannedTags.has(existingItem.tag)) {
            // Preserve manually tracked item
            items.push(existingItem);
          }
        });
      }
    } catch (e) {
      // If reading existing file fails, continue without merging
    }
  }
  
  // Create timestamp data
  const timestamp = new Date().toISOString();
  const timestampFormatted = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short'
  });
  
  // Write output
  const output = {
    coverage: data.coverage || {},
    stats,
    testCaseStatus,
    items,
    lastRun: timestamp,
    lastRunFormatted: timestampFormatted
  };
  
  writeJson(outPath, output);
  
  // Calculate summary stats for nice logging
  const testCases = Object.values(testCaseStatus);
  const implementedCases = testCases.filter(tc => tc.implemented).length;
  const totalCases = testCases.length;
  const totalTests = testCases.reduce((sum, tc) => sum + (tc.testCount || 0), 0);
  const totalComponents = testCases.reduce((sum, tc) => sum + (tc.componentCount || 0), 0);
  
  console.log(`✅ ${decorator.charAt(0).toUpperCase() + decorator.slice(1)} coverage data updated:`);
  console.log(`   Total Tests: ${totalTests}`);
  console.log(`   Implemented: ${implementedCases}/${totalCases}`);
  if (totalComponents > 0) {
    console.log(`   Components: ${totalComponents}`);
  }
  console.log(`   ✓ Saved to: ${path.basename(outPath)}`);
  
  // Clean up legacy files
  cleanupLegacyFiles(path.dirname(outPath));
}

/**
 * Simplified main function for test coverage scripts
 */
export function testCoverageMain({
  decorator,
  baseDir,
  tagPatterns,
  mapOptions,
  assignCaseIds,
  useRules = true
}) {
  const paths = {
    rulesPath: path.resolve(baseDir, 'data/rules.json'),
    dataPath: path.resolve(baseDir, 'data/components.json'),
    testDir: path.resolve(baseDir, `../../../../../../test/wdio/${decorator}`),
    outPath: path.resolve(baseDir, 'data/test-coverage.json')
  };
  
  generateTestCoverage({
    ...paths,
    decorator,
    tagPatterns,
    mapOptions,
    assignCaseIds,
    useRules
  });
}
