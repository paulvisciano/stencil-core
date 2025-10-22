import { fileURLToPath } from 'url';
import path from 'path';
import { testCoverageMain } from '../_shared/test-coverage-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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