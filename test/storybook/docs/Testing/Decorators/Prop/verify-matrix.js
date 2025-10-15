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
const COMPONENT_DIR = path.resolve(__dirname, '../../../../../../test/wdio/prop/matrix');
const TEST_DIR = path.resolve(__dirname, '../../../../../../test/wdio/prop/tests');
const OVERLAY_OUT = path.resolve(__dirname, 'coverage-overlay.json');

const TAG_REGEX = /\$\(\s*([`'\"])\s*([a-z0-9-]+)\s*\1\s*\)/gi;

function runCoverage() {
  const coverageScript = path.resolve(__dirname, 'coverage.js');
  execFileSync(process.execPath, [coverageScript], { stdio: 'inherit' });
}

function buildPropOverlay({ rules, data, optionOrder }) {
  const testSources = collectTestSources(TEST_DIR);
  const manifest = buildManifestFromSources(testSources, TAG_REGEX);

  const items = data.coveredPermutations.map(permutation => {
    const files = permutation.files || [];
    const primary = files[0] || null;
    const baseName = primary ? path.basename(primary, path.extname(primary)) : null;
    const tag = baseName || null;

    const opts = {};
    (optionOrder || []).forEach((name, index) => {
      opts[name] = permutation.options?.[index];
    });

    const testedBy = tag && manifest.has(tag) ? manifest.get(tag) : [];
    const tested = Boolean(testedBy && testedBy.length);
    const group = expectedGroupName(permutation.options, rules, optionOrder);

    return {
      group,
      options: opts,
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
  console.log(`Prop coverage overlay written to ${OVERLAY_OUT}`);
}

runVerifier({
  decorator: 'prop',
  baseDir: BASE_DIR,
  rulesPath: RULES_PATH,
  dataPath: DATA_PATH,
  componentDir: COMPONENT_DIR,
  overlayBuilder: buildPropOverlay,
  coverageRunner: runCoverage,
  logLabel: '@Prop',
});
