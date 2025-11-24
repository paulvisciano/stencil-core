import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIR = path.resolve(__dirname, '../../../../../..', 'test/wdio/ts-target');
const JSON_PATH = path.resolve(__dirname, 'data/test-coverage.json');
const OVERVIEW_PATH = path.resolve(__dirname, 'Overview.mdx');

// Test case mapping based on directory names
const DIRECTORY_TO_TEST_CASE = {
  'extends-lifecycle-basic': '1',
  'extends-lifecycle-multilevel': '2',
  'extends-props-state': '3',
  'extends-methods': '4',
  'extends-render': '5',
  'extends-abstract': '6',
  'extends-cmp': '7',
  'extends-external': '8',
  'extends-mixin': '9',
  'extends-events': '10',
  'extends-watch': '11',
  'extends-controller-updates': '12',
  'extends-direct-state': '12a',
  'extends-floating-ui': '13',
  'extends-via-host': '17',
  'extends-conflicts': '15',
  'extends-ssr': '16',
  'extends-inheritance-scaling': '18',
  'extends-composition-scaling': '19',
};

/**
 * Find all extends-* test directories
 */
function findExtendsDirectories() {
  if (!fs.existsSync(TEST_DIR)) return [];
  return fs.readdirSync(TEST_DIR)
    .filter(file => {
      const fullPath = path.join(TEST_DIR, file);
      return fs.statSync(fullPath).isDirectory() && file.startsWith('extends-');
    })
    .map(dir => ({
      name: dir,
      path: path.join(TEST_DIR, dir),
      testCaseId: DIRECTORY_TO_TEST_CASE[dir],
    }));
}

/**
 * Count total it() test cases in a file
 */
function countTests(testFile) {
  if (!fs.existsSync(testFile)) return 0;
  const content = fs.readFileSync(testFile, 'utf8');
  const matches = content.match(/\bit\s*\(/g);
  return matches ? matches.length : 0;
}

/**
 * Detect test breakdown by output targets (dist, customElements, hydrate)
 * by analyzing describe blocks in test files
 */
function detectOutputTargets(dirPath) {
  const breakdown = {};
  const testFile = path.join(dirPath, 'cmp.test.ts');
  
  if (!fs.existsSync(testFile)) return breakdown;
  
  const content = fs.readFileSync(testFile, 'utf8');
  
  // Match describe blocks and count nested it() calls
  const describeBlocks = [
    { pattern: /describe\s*\(\s*['"](?:[^'"]*\b)?dist(?:\s+output)?\b[^'"]*['"]/gi, key: 'dist' },
    { pattern: /describe\s*\(\s*['"](?:[^'"]*\b)?(?:custom[- ]element|dist[- ]custom[- ]elements?)(?:\s+output)?\b[^'"]*['"]/gi, key: 'customElements' },
    { pattern: /describe\s*\(\s*['"](?:[^'"]*\b)?hydrate(?:\s+output)?\b[^'"]*['"]/gi, key: 'hydrate' },
  ];
  
  describeBlocks.forEach(({ pattern, key }) => {
    const regex = new RegExp(pattern.source, pattern.flags);
    const match = regex.exec(content);
    if (match) {
      // Find the describe block content
      const startIdx = content.indexOf('{', match.index);
      if (startIdx === -1) return;
      
      // Find matching closing brace (simple approach - count braces)
      let braceCount = 1;
      let endIdx = startIdx + 1;
      while (braceCount > 0 && endIdx < content.length) {
        if (content[endIdx] === '{') braceCount++;
        if (content[endIdx] === '}') braceCount--;
        endIdx++;
      }
      
      const blockContent = content.substring(startIdx, endIdx);
      const testCount = (blockContent.match(/\bit\s*\(/g) || []).length;
      if (testCount > 0) {
        breakdown[key] = testCount;
      }
    }
  });
  
  return breakdown;
}

/**
 * Scan all extends directories and generate coverage data
 */
function generateCoverageData() {
  const directories = findExtendsDirectories();
  const coverage = {};
  
  let totalTests = 0;
  let implementedCount = 0;
  let componentsBuilt = 0;
  let componentsTested = 0;
  
  const testBreakdown = {
    lifecycle: 0,
    standardPatterns: 0,
    reactiveControllers: 0,
  };
  
  directories.forEach(({ name, path: dirPath, testCaseId }) => {
    const testFile = path.join(dirPath, 'cmp.test.ts');
    const testCount = countTests(testFile);
    const implemented = testCount > 0;
    const breakdown = implemented ? detectOutputTargets(dirPath) : {};
    
    // Component exists if directory has a cmp.tsx file
    const componentExists = fs.existsSync(path.join(dirPath, 'cmp.tsx'));
    
    coverage[testCaseId] = {
      implemented,
      componentCount: componentExists ? 1 : 0,
      testCount,
      testBreakdown: breakdown,
      specPath: `test/wdio/ts-target/${name}/cmp.test.ts`,
      _lastScanned: new Date().toISOString(),
    };
    
    totalTests += testCount;
    if (implemented) implementedCount++;
    if (componentExists) componentsBuilt++;
    if (implemented) componentsTested++;
    
    // Categorize tests by type
    if (['1', '2'].includes(testCaseId)) {
      testBreakdown.lifecycle += testCount;
    } else if (['12', '12a', '13', '17', '18', '19'].includes(testCaseId)) {
      testBreakdown.reactiveControllers += testCount;
    } else {
      testBreakdown.standardPatterns += testCount;
    }
  });
  
  return {
    _generated: {
      timestamp: new Date().toISOString(),
      totalTests,
      implementedTestCases: implementedCount,
      totalTestCases: Object.keys(DIRECTORY_TO_TEST_CASE).length,
      componentsBuilt,
      componentsTested,
      testBreakdown,
      note: 'Auto-generated by coverage.js - DO NOT EDIT MANUALLY',
    },
    testCases: coverage,
  };
}

/**
 * Merge generated data with existing manual documentation
 */
function mergeCoverageData() {
  // Read existing JSON to preserve manual documentation
  const existingData = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
  const generatedData = generateCoverageData();
  
  // Update summary with generated data
  existingData.summary = {
    ...existingData.summary,
    totalTests: generatedData._generated.totalTests,
    implementedTestCases: generatedData._generated.implementedTestCases,
    totalTestCases: generatedData._generated.totalTestCases,
    componentsBuilt: generatedData._generated.componentsBuilt,
    componentsTested: generatedData._generated.componentsTested,
    testBreakdown: generatedData._generated.testBreakdown,
    note: `Last updated: ${new Date().toLocaleString('en-US', { 
      timeZone: 'America/Los_Angeles',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZoneName: 'short'
    })}`,
  };
  
  // Update each test case with generated counts (preserve manual descriptions/features)
  Object.entries(generatedData.testCases).forEach(([testCaseId, generated]) => {
    if (existingData.testCaseStatus[testCaseId]) {
      // Update existing test case
      existingData.testCaseStatus[testCaseId].implemented = generated.implemented;
      existingData.testCaseStatus[testCaseId].componentCount = generated.componentCount;
      existingData.testCaseStatus[testCaseId].testCount = generated.testCount;
      existingData.testCaseStatus[testCaseId].testBreakdown = generated.testBreakdown;
      existingData.testCaseStatus[testCaseId].specPath = generated.specPath;
    } else if (testCaseId) {
      // Create new test case entry (preserve any manual fields if they exist)
      const existingManual = existingData.testCaseStatus[testCaseId] || {};
      existingData.testCaseStatus[testCaseId] = {
        ...existingManual, // Preserve any manual fields first
        implemented: generated.implemented,
        componentCount: generated.componentCount,
        testCount: generated.testCount,
        testBreakdown: generated.testBreakdown,
        specPath: generated.specPath,
      };
    }
  });
  
  existingData.version = new Date().toISOString().split('T')[0];
  
  return existingData;
}

/**
 * Update timestamp in Overview.mdx
 */
function updateOverviewTimestamp() {
  if (!fs.existsSync(OVERVIEW_PATH)) {
    console.log('   ⚠ Overview.mdx not found, skipping timestamp update');
    return;
  }
  
  const timestamp = new Date().toLocaleString('en-US', { 
    timeZone: 'America/Los_Angeles',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    timeZoneName: 'short'
  });
  
  let content = fs.readFileSync(OVERVIEW_PATH, 'utf8');
  
  // Update the timestamp in the "Last run" line
  const timestampRegex = /(📅 Last run:)[^<]*/;
  if (timestampRegex.test(content)) {
    content = content.replace(timestampRegex, `$1 ${timestamp}`);
    fs.writeFileSync(OVERVIEW_PATH, content);
    console.log(`   ✓ Updated Overview.mdx timestamp: ${timestamp}`);
  } else {
    console.log('   ⚠ Timestamp marker not found in Overview.mdx');
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Scanning extends test directories...');
  
  const mergedData = mergeCoverageData();
  
  // Add timestamp to the merged data
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
  
  mergedData.lastRun = timestamp;
  mergedData.lastRunFormatted = timestampFormatted;
  
  fs.writeFileSync(JSON_PATH, JSON.stringify(mergedData, null, 2));
  
  console.log('✅ Extends coverage data updated:');
  console.log(`   Total Tests: ${mergedData.summary.totalTests}`);
  console.log(`   Implemented: ${mergedData.summary.implementedTestCases}/${mergedData.summary.totalTestCases}`);
  console.log(`   Components: ${mergedData.summary.componentsTested}/${mergedData.summary.componentsBuilt}`);
  console.log(`   Breakdown: ${mergedData.summary.testBreakdown.lifecycle} lifecycle, ${mergedData.summary.testBreakdown.standardPatterns} standard, ${mergedData.summary.testBreakdown.reactiveControllers} reactive`);
  console.log(`   ✓ Saved to: ${path.basename(JSON_PATH)}`);
  
  updateOverviewTimestamp();
}

main();

