import { fileURLToPath } from 'url';
import path from 'path';
import { testCoverageMain, normalizeBoolean } from '../_shared/test-coverage-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Decorator-specific: Extract options from permutation
function mapOptions(permutation) {
  const type = permutation.options?.[0];
  const hasDefault = normalizeBoolean(permutation.options?.[1]);
  return { type, hasDefault };
}

// Decorator-specific: Assign case IDs based on @State test cases
function assignCaseIds(options, group) {
  // #1 = primitive mutation, #2 = complex static
  const primitiveSet = new Set(['string', 'number', 'boolean']);
  const complexSet = new Set(['any', 'array', 'object']);
  
  if (primitiveSet.has(group)) return [1];
  if (complexSet.has(group)) return [2];
  return [];
}

// Use shared main function
testCoverageMain({
  decorator: 'state',
  baseDir: __dirname,
  tagPatterns: {
    jsxRegex: /<\s*(state-[a-z0-9-]+)\b/gi,
    // No selector regex for @State
  },
  mapOptions,
  assignCaseIds
});
