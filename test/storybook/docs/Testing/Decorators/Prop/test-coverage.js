import { fileURLToPath } from 'url';
import path from 'path';
import { testCoverageMain, normalizeBoolean } from '../_shared/test-coverage-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Decorator-specific: Extract options from permutation
function mapOptions(permutation) {
  const type = permutation.options?.[0];
  const reflect = permutation.options?.[1];
  const mutable = permutation.options?.[2];
  return { type, reflect, mutable };
}

// Decorator-specific: Assign case IDs based on @Prop test cases
function assignCaseIds(options, group) {
  // #1 = primitive types exercised at runtime
  // #2 = complex types static/structure  
  // #3 = reflect=true behavior on primitives
  // #4 = reflect=false behavior on primitives
  // #5 = mutable=true behavior on primitives
  const primitiveSet = new Set(['string', 'number', 'boolean']);
  const complexSet = new Set(['Array', 'Object', 'Set']);
  const caseIds = [];
  
  if (primitiveSet.has(group)) caseIds.push(1);
  if (complexSet.has(group)) caseIds.push(2);
  
  const isReflect = normalizeBoolean(options.reflect);
  if (primitiveSet.has(group) && isReflect === true) caseIds.push(3);
  if (primitiveSet.has(group) && isReflect === false) caseIds.push(4);
  
  const isMutable = normalizeBoolean(options.mutable);
  if (primitiveSet.has(group) && isMutable === true) caseIds.push(5);
  
  return caseIds;
}

// Use shared main function
testCoverageMain({
  decorator: 'prop',
  baseDir: __dirname,
  tagPatterns: {
    jsxRegex: /<\s*(prop-[a-z0-9-]+)\b/gi,
    // No selector regex for @Prop
  },
  mapOptions,
  assignCaseIds
});
