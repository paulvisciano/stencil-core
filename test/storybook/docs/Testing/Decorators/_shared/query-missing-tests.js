#!/usr/bin/env node
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Quick utility to answer "what test cases are missing?" across all decorators and behaviors
 */
function queryMissingTestCases() {
  const decoratorsDir = path.resolve(__dirname, '..');
  const behaviorDir = path.resolve(__dirname, '../../Behavior');
  
  console.log('🔍 Missing Test Cases Summary\n');
  
  // Check Decorators
  const decorators = fs.readdirSync(decoratorsDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('_'))
    .map(dirent => dirent.name)
    .filter(name => {
      const testCoverageFile = path.resolve(decoratorsDir, name, 'data/test-coverage.json');
      return fs.existsSync(testCoverageFile);
    });

  console.log('📋 Decorators:\n');

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
  
  // Check Behavior/Extends
  console.log('\n🔧 Behavior:\n');
  
  const extendsDir = path.resolve(behaviorDir, 'Extends');
  const extendsTestCoverageFile = path.resolve(extendsDir, 'data/test-coverage.json');
  
  if (fs.existsSync(extendsTestCoverageFile)) {
    const data = JSON.parse(fs.readFileSync(extendsTestCoverageFile, 'utf8'));
    
    if (!data.testCaseStatus) {
      console.log(`❌ Extends: No testCaseStatus found (needs script update)`);
    } else {
      const missingCases = Object.entries(data.testCaseStatus)
        .filter(([caseId, status]) => !status.implemented)
        .map(([caseId]) => `#${caseId}`);
      
      const implementedCount = Object.values(data.testCaseStatus).filter(s => s.implemented).length;
      const totalCount = Object.keys(data.testCaseStatus).length;
      const totalTests = data.summary?.totalTests || 0;

      if (missingCases.length === 0) {
        console.log(`✅ Extends: All test cases implemented (${totalTests} tests)`);
      } else {
        console.log(`⚠️  Extends: ${implementedCount}/${totalCount} implemented, missing ${missingCases.join(', ')} (${totalTests} tests passing)`);
      }
    }
  } else {
    console.log(`❌ Extends: test-coverage.json not found`);
  }
  
  console.log('');
}

// Run if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  queryMissingTestCases();
}

export { queryMissingTestCases };
