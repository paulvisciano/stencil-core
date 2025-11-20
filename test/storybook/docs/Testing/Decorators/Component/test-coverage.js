import { fileURLToPath } from 'url';
import path from 'path';
import { testCoverageMain, normalizeBoolean } from '../_shared/test-coverage-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Decorator-specific: Extract options from permutation
function mapOptions(permutation) {
  const [shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles] = permutation.options || [];
  return { shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles };
}

// Decorator-specific: Assign case IDs based on @Component test cases
function assignCaseIds(options, group) {
  // #1 = shadow mode (shadow: true)
  // #2 = scoped mode (scoped: true, shadow: false)
  // #3 = light mode (shadow: false, scoped: false)
  const caseIds = [];
  
  if (group === 'shadow') caseIds.push(1);
  if (group === 'scoped') caseIds.push(2);
  if (group === 'light') caseIds.push(3);
  
  return caseIds;
}

// Use shared main function
testCoverageMain({
  decorator: 'component-decorator',
  baseDir: __dirname,
  tagPatterns: {
    jsxRegex: /<\s*(cmp-[a-z0-9-]+)\b/gi,
    // No selector regex for @Component
  },
  mapOptions,
  assignCaseIds
});

