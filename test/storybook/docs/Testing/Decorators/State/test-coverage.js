import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import {
  readJson,
  resolveOptionOrder,
  collectTestSources,
  expectedGroupName,
  writeJson,
} from '../_shared/verify-matrix-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.resolve(__dirname, '..');
const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const COMPONENT_DIR = path.resolve(__dirname, '../../../../../../test/wdio/state/matrix');
const TEST_DIR = path.resolve(__dirname, '../../../../../../test/wdio/state/tests');
const OUT_PATH = path.resolve(__dirname, 'data/test-coverage.json');

// No refresh/verify here; test coverage only reads existing components.json

function normalizeBoolean(value) {
  if (value === true || value === 'true' || value === '✓') {
    return true;
  }
  if (value === false || value === 'false' || value === '✗') {
    return false;
  }
  return Boolean(value);
}

function buildStateTestCoverage({ rules, data, optionOrder }) {
  const testSources = collectTestSources(TEST_DIR);
  // Detect components included in JSX templates (describe/before render)
  const JSX_TAG_RE = /<\s*(state-[a-z0-9-]+)\b/gi;
  const jsxTags = new Set();
  let jsxMatch;
  while ((jsxMatch = JSX_TAG_RE.exec(testSources)) !== null) {
    const t = (jsxMatch[1] || '').trim();
    if (t) jsxTags.add(t);
  }

  const items = data.coveredPermutations.map(permutation => {
    const files = permutation.files || [];
    const primary = files[0] || null;
    const baseName = primary ? path.basename(primary, path.extname(primary)) : null;
    const tag = baseName || null;

    const type = permutation.options?.[0];
    const hasDefault = normalizeBoolean(permutation.options?.[1]);

    const options = { type, hasDefault };

    const tested = Boolean(tag && jsxTags.has(tag));
    const group = expectedGroupName(permutation.options, rules, optionOrder);

    // Assign stable case IDs for State: #1 = primitive mutation, #2 = complex static
    const primitiveSet = new Set(['string', 'number', 'boolean']);
    const complexSet = new Set(['any', 'array', 'object']);
    const caseIds = primitiveSet.has(group) ? [1] : complexSet.has(group) ? [2] : [];

    return {
      group,
      options,
      optionsKey: (permutation.options || []).join('|'),
      files,
      tag,
      tested,
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
  console.log(`State test coverage written to ${OUT_PATH}`);
}

const rules = readJson(RULES_PATH);
const data = readJson(DATA_PATH);
const optionOrder = resolveOptionOrder('state', rules);
buildStateTestCoverage({ rules, data, optionOrder });

// Clean up legacy files if present
for (const f of [
  path.resolve(__dirname, 'coverage-data.json'),
  path.resolve(__dirname, 'coverage-overlay.json'),
]) {
  if (fs.existsSync(f)) {
    try { fs.unlinkSync(f); } catch {}
  }
}
