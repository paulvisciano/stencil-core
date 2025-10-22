import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {
  collectTestSources,
  expectedGroupName,
  writeJson,
} from '../_shared/verify-matrix-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const TEST_DIR = path.resolve(__dirname, '../../../../../../test/wdio/event');
const OUT_PATH = path.resolve(__dirname, 'data/test-coverage.json');

// Test coverage analysis for Event components
function buildEventTestCoverage({ rules, data, optionOrder }) {
  const testSources = collectTestSources(TEST_DIR);
  // Detect event components included in JSX templates and test selectors
  const JSX_TAG_RE = /<\s*(event-[a-z0-9-]+)\b/gi;
  const SELECTOR_RE = /\$\(\s*['"`](event-[a-z0-9-]+)['"`]\s*\)/gi;
  
  const jsxTags = new Set();
  const selectorTags = new Set();
  
  let jsxMatch;
  while ((jsxMatch = JSX_TAG_RE.exec(testSources)) !== null) {
    const t = (jsxMatch[1] || '').trim();
    if (t) jsxTags.add(t);
  }
  
  let selectorMatch;
  while ((selectorMatch = SELECTOR_RE.exec(testSources)) !== null) {
    const t = (selectorMatch[1] || '').trim();
    if (t) selectorTags.add(t);
  }
  
  const testedTags = new Set([...jsxTags, ...selectorTags]);

  const items = (data.coveredPermutations || []).map(permutation => {
    const files = permutation.files || [];
    const primaryFile = files[0];
    let tag = '';
    if (primaryFile) {
      const base = path.basename(primaryFile, path.extname(primaryFile));
      tag = base; // tag should match filename (e.g. event-bubbles-cancelable-composed)
    }

    const bubbles = permutation.options?.[0];
    const cancelable = permutation.options?.[1];
    const composed = permutation.options?.[2];

    const options = { bubbles, cancelable, composed };

    const tested = Boolean(tag && testedTags.has(tag));
    const group = expectedGroupName(permutation.options, rules, optionOrder);

    // Assign stable case IDs for Event components:
    // #1 = bubbling events (bubbles=true)
    // #2 = non-bubbling events (bubbles=false)
    const caseIds = [];
    if (bubbles === '✓') caseIds.push(1); // Bubbling events
    if (bubbles === '✗') caseIds.push(2); // Non-bubbling events

    const testedBy = tested ? (bubbles === '✓' ? ['Test Case #1'] : ['Test Case #2']) : [];

    return {
      group,
      options,
      optionsKey: (permutation.options || []).join('|'),
      files,
      tag,
      tested,
      testedBy,
      caseIds,
    };
  });

  const testedCount = items.filter(item => item.tested).length;
  const stats = {
    totalPermutations: items.length,
    testedPermutations: testedCount,
    percentTested: items.length ? ((testedCount / items.length) * 100).toFixed(2) : '0.00',
  };

  writeJson(OUT_PATH, { coverage: data.coverage, stats, items });
  console.log(`Event test coverage written to ${OUT_PATH}`);
}

function main() {
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  const optionOrder = ['bubbles', 'cancelable', 'composed'];
  
  buildEventTestCoverage({ rules, data, optionOrder });
}

main();