import { fileURLToPath } from 'url';
import path from 'path';
import { testCoverageMain, normalizeBoolean } from '../_shared/test-coverage-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Decorator-specific: Extract options from permutation
function mapOptions(permutation) {
  const target = permutation.options?.[0];
  const event = permutation.options?.[1];
  const capture = permutation.options?.[2];
  const passive = permutation.options?.[3];
  return { target, event, capture, passive };
}

// Decorator-specific: Assign case IDs based on @Listen test cases
function assignCaseIds(options, group) {
  // #1 = Host target events - listeners attached to the host element
  // #2 = Global target events - listeners attached to window, document, or body
  // #3 = Capture phase behavior - testing capture=true
  // #4 = Passive listener behavior - testing passive=true
  const caseIds = [];
  
  const isCapture = normalizeBoolean(options.capture);
  const isPassive = normalizeBoolean(options.passive);
  
  // Assign based on target
  if (options.target === 'host') {
    caseIds.push(1); // Host target tests
  } else {
    caseIds.push(2); // Global target tests (window, document, body)
  }
  
  // Capture phase behavior - only assign to capture=true components
  // (capture=false is covered as part of the base target tests)
  if (isCapture === true) {
    caseIds.push(3); // Capture phase tests
  }
  
  // Passive listener behavior - only assign to passive=true components
  // (passive=false is covered as part of the base target tests)
  if (isPassive === true) {
    caseIds.push(4); // Passive listener tests
  }
  
  return caseIds;
}

// Use shared main function
testCoverageMain({
  decorator: 'listen',
  baseDir: __dirname,
  tagPatterns: {
    jsxRegex: /<\s*(listen-[a-z0-9-]+)\b/gi,
    selectorRegex: /\$\(\s*([`'\"])\s*(listen-[a-z0-9-]+)\s*\1\s*\)/gi,
  },
  mapOptions,
  assignCaseIds
});

