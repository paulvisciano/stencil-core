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
  
  // Write output
  const output = {
    coverage: data.coverage || {},
    stats,
    items
  };
  
  writeJson(outPath, output);
  console.log(`${decorator.charAt(0).toUpperCase() + decorator.slice(1)} test coverage written to ${outPath}`);
  
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
