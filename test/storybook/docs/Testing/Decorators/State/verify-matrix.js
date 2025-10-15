import path from 'path';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';
import {
  runVerifier,
  collectTestSources,
  buildManifestFromSources,
  expectedGroupName,
  writeJson,
} from '../_shared/verify-matrix-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.resolve(__dirname, '..');
const RULES_PATH = path.resolve(__dirname, 'rules.json');
const DATA_PATH = path.resolve(__dirname, 'coverage-data.json');
const COMPONENT_DIR = path.resolve(__dirname, '../../../../../../test/wdio/state/matrix');
const TEST_DIR = path.resolve(__dirname, '../../../../../../test/wdio/state/tests');
const OVERLAY_OUT = path.resolve(__dirname, 'coverage-overlay.json');

const TAG_REGEX = /\$\(\s*([`'\"])\s*(state-[a-z0-9-]+)\s*\1\s*\)/gi;

function runCoverage() {
  const coverageScript = path.resolve(__dirname, 'coverage.js');
  execFileSync(process.execPath, [coverageScript], { stdio: 'inherit' });
}

function normalizeBoolean(value) {
  if (value === true || value === 'true' || value === '✓') {
    return true;
  }
  if (value === false || value === 'false' || value === '✗') {
    return false;
  }
  return Boolean(value);
}

function buildStateOverlay({ rules, data, optionOrder }) {
  const testSources = collectTestSources(TEST_DIR);
  const manifest = buildManifestFromSources(testSources, TAG_REGEX, { fallback: true });

  const items = data.coveredPermutations.map(permutation => {
    const files = permutation.files || [];
    const primary = files[0] || null;
    const baseName = primary ? path.basename(primary, path.extname(primary)) : null;
    const tag = baseName || null;

    const type = permutation.options?.[0];
    const hasDefault = normalizeBoolean(permutation.options?.[1]);

    const options = {
      type,
      hasDefault,
    };

    const testedBy = tag && manifest.has(tag) ? manifest.get(tag) : [];
    const tested = Boolean(testedBy && testedBy.length) || Boolean(tag && manifest.has(tag));
    const group = expectedGroupName(permutation.options, rules, optionOrder);

    return {
      group,
      options,
      optionsKey: (permutation.options || []).join('|'),
      files,
      tag,
      tested,
      testedBy,
    };
  });

  const testedCount = items.filter(item => item.tested).length;
  const stats = {
    totalPermutations: items.length,
    testedPermutations: testedCount,
    percentTested: items.length ? ((testedCount / items.length) * 100).toFixed(2) : '0.00',
  };

  writeJson(OVERLAY_OUT, { coverage: data.coverage, stats, items });
  console.log(`State coverage overlay written to ${OVERLAY_OUT}`);
}

runVerifier({
  decorator: 'state',
  baseDir: BASE_DIR,
  rulesPath: RULES_PATH,
  dataPath: DATA_PATH,
  componentDir: COMPONENT_DIR,
  overlayBuilder: buildStateOverlay,
  coverageRunner: runCoverage,
  logLabel: '@State',
});
