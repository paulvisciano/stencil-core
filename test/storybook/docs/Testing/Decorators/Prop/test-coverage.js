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

const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const TEST_DIR = path.resolve(__dirname, '../../../../../../test/wdio/prop/tests');
const OUT_PATH = path.resolve(__dirname, 'data/test-coverage.json');

// Overlay-only builder (no refresh)
function buildPropTestCoverage({ rules, data, optionOrder }) {
  const testSources = collectTestSources(TEST_DIR);
  // Prefer JSX tag scanning like State; also consider $() selectors fallback
  const JSX_TAG_RE = /<\s*(prop-[a-z0-9-]+)\b/gi;
  const jsxTags = new Set();
  let m;
  while ((m = JSX_TAG_RE.exec(testSources)) !== null) {
    const t = (m[1] || '').trim();
    if (t) jsxTags.add(t);
  }

  const normalizeBoolean = (value) => {
    if (value === true || value === 'true' || value === '✓') return true;
    if (value === false || value === 'false' || value === '✗') return false;
    return Boolean(value);
  };

  const items = data.coveredPermutations.map(permutation => {
    const files = permutation.files || [];
    const primary = files[0] || null;
    const baseName = primary ? path.basename(primary, path.extname(primary)) : null;
    const tag = baseName || null;

    const type = permutation.options?.[0];
  const reflect = permutation.options?.[1];
  const mutable = permutation.options?.[2];

    const options = { type, reflect, mutable };

  const tested = Boolean(tag && jsxTags.has(tag));
  const group = expectedGroupName(permutation.options, rules, optionOrder);

  // Assign stable case IDs:
  // #1 = primitive types exercised at runtime
  // #2 = complex types static/structure
  // #3 = reflect=true behavior on primitives
  // #4 = reflect=false behavior on primitives
  const primitiveSet = new Set(['string', 'number', 'boolean']);
  const complexSet = new Set(['Array', 'Object', 'Set']);
  const caseIds = [];
  if (primitiveSet.has(group)) caseIds.push(1);
  if (complexSet.has(group)) caseIds.push(2);
  const isReflect = normalizeBoolean(reflect);
  if (primitiveSet.has(group) && isReflect === true) caseIds.push(3);
  if (primitiveSet.has(group) && isReflect === false) caseIds.push(4);

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
  console.log(`Prop test coverage written to ${OUT_PATH}`);
}

const rules = readJson(RULES_PATH);
const data = readJson(DATA_PATH);
const optionOrder = resolveOptionOrder('prop', rules);
buildPropTestCoverage({ rules, data, optionOrder });

// Clean up legacy files if present
for (const f of [
  path.resolve(__dirname, 'coverage-data.json'),
  path.resolve(__dirname, 'coverage-overlay.json'),
]) {
  if (fs.existsSync(f)) {
    try { fs.unlinkSync(f); } catch {}
  }
}
