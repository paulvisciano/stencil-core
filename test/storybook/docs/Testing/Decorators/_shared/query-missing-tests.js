#!/usr/bin/env node
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Quick utility to answer "what test cases are missing?" across all decorators
 */
function queryMissingTestCases() {
  const decoratorsDir = path.resolve(__dirname, '..');
  
  // Find all decorator directories with test-coverage.json
  const decorators = fs.readdirSync(decoratorsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_'))
    .map(dirent => dirent.name)
    .filter(name => {
      const testCoverageFile = path.resolve(decoratorsDir, name, 'data/test-coverage.json');
      return fs.existsSync(testCoverageFile);
    });

  console.log('🔍 Missing Test Cases Summary\n');

  decorators.forEach(decorator => {
    const testCoverageFile = path.resolve(decoratorsDir, decorator, 'data/test-coverage.json');
    const data = JSON.parse(fs.readFileSync(testCoverageFile, 'utf8'));
    
    if (!data.testCaseStatus) {
      console.log(`❌ @${decorator}: No testCaseStatus found (needs script update)`);
      return;
    }

    const missingCases = Object.entries(data.testCaseStatus)
      .filter(([caseId, status]) => !status.implemented)
      .map(([caseId]) => `#${caseId}`);

    if (missingCases.length === 0) {
      console.log(`✅ @${decorator}: All test cases implemented`);
    } else {
      console.log(`⚠️  @${decorator}: Missing cases ${missingCases.join(', ')}`);
    }
  });
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  queryMissingTestCases();
}

export { queryMissingTestCases };
