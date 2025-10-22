import { fileURLToPath } from 'url';
import path from 'path';
import { testCoverageMain } from '../_shared/test-coverage-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Decorator-specific: Extract options from permutation
function mapOptions(permutation) {
  const bubbles = permutation.options?.[0];
  const cancelable = permutation.options?.[1];
  const composed = permutation.options?.[2];
  return { bubbles, cancelable, composed };
}

// Decorator-specific: Assign case IDs based on @Event test cases  
function assignCaseIds(options, group) {
  // #1 = bubbling events (bubbles=true)
  // #2 = non-bubbling events (bubbles=false)
  const caseIds = [];
  if (options.bubbles === '✓') caseIds.push(1); // Bubbling events
  if (options.bubbles === '✗') caseIds.push(2); // Non-bubbling events
  return caseIds;
}

// Use shared main function
testCoverageMain({
  decorator: 'event',
  baseDir: __dirname,
  tagPatterns: {
    jsxRegex: /<\s*(event-[a-z0-9-]+)\b/gi,
    selectorRegex: /\$\(\s*['"`](event-[a-z0-9-]+)['"`]\s*\)/gi,
  },
  mapOptions,
  assignCaseIds,
  useRules: false // Event doesn't use complex rule-based grouping
});