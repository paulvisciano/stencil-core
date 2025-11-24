import { fileURLToPath } from 'url';
import path from 'path';
import { testCoverageMain } from '../_shared/test-coverage-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * NOTE: This script currently only scans test/wdio/method for generated components.
 * Additional components with @Method decorators throughout test/wdio/ are manually
 * tracked in test-coverage.json (Test Cases #4-15). These include:
 * - Inheritance scenarios (extends-methods, extends-props-state, etc.)
 * - State management (attribute-boolean, computed-properties-state-decorator)
 * - DOM/slot interaction (scoped-slot-assigned-methods)
 * - Event emission (esm-import)
 * - Dynamic imports (dynamic-imports)
 * - Focus/blur handling (radio-group-blur)
 * 
 * Future enhancement: Extend script to scan all WDIO folders for @Method decorators.
 */

// Decorator-specific: Extract options from permutation
function mapOptions(permutation) {
  const returns = permutation.options?.[0];
  const async = permutation.options?.[1];
  const args = permutation.options?.[2];
  return { returns, async, args };
}

// Decorator-specific: Assign case IDs based on @Method test cases
function assignCaseIds(options, group) {
  // #1 = promise methods (async/non-async promise variants)
  // #2 = value methods (immediate return values)  
  // #3 = void methods (side effects, no return)
  // Note: Test Cases #4-15 are manually assigned for components outside test/wdio/method
  const caseIds = [];
  if (group === 'promise') caseIds.push(1);
  if (group === 'value') caseIds.push(2); 
  if (group === 'void') caseIds.push(3);
  return caseIds;
}

// Use shared main function
testCoverageMain({
  decorator: 'method',
  baseDir: __dirname,
  tagPatterns: {
    jsxRegex: /<\s*(method-[a-z0-9-]+)\b/gi,
    selectorRegex: /\$\(\s*['"`](method-[a-z0-9-]+)['"`]\s*\)/gi,
  },
  mapOptions,
  assignCaseIds
});