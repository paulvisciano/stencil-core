import fs from 'fs';
import path from 'path';
import os from 'os';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AI_TESTING_DIR = path.resolve(__dirname, '../.ai/testing');
const RULES_PATH = path.resolve(__dirname, 'component-rules.json');
const DATA_PATH = path.resolve(__dirname, 'component-coverage-data.json');
const COMPONENT_DIR = path.resolve(__dirname, '../../../../../test/wdio/component-decorator');

const OPTIONS = ['shadow','scoped','assetsDirs','formAssociated','styleUrl','styleUrls','styles'];

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function countTsxFiles(root) {
  let count = 0;
  const stack = [root];
  while (stack.length) {
    const cur = stack.pop();
    const entries = fs.readdirSync(cur, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(cur, e.name);
      if (e.isDirectory()) stack.push(full);
      else if (e.isFile() && e.name.endsWith('.tsx')) count++;
    }
  }
  return count;
}

function symbolToBool(sym) {
  return sym === '✓' ? true : false; // treat omit/false as false for mode matching
}

function expectedGroupName(options, rules) {
  const [shadow, scoped] = options;
  const modes = rules.modes || [];
  const bools = { shadow: symbolToBool(shadow), scoped: symbolToBool(scoped) };
  for (const m of modes) {
    const when = m.when || {};
    let ok = true;
    for (const k of Object.keys(when)) {
      if (bools[k] !== when[k]) { ok = false; break; }
    }
    if (ok) return m.name;
  }
  // fallback
  if (shadow === '✓') return 'shadow';
  if (scoped === '✓') return 'scoped';
  return 'light';
}

function validateExclusivity(options, rules) {
  const groups = rules.exclusiveGroups || [];
  for (const g of groups) {
    let setCount = 0;
    for (const member of g.members) {
      const idx = OPTIONS.indexOf(member);
      if (idx === -1) continue;
      if (options[idx] === '✓') setCount++;
    }
    if (setCount > 1) return false;
    if (g.allowNone === false && setCount === 0) return false;
  }
  return true;
}

function refreshCoverage() {
  // Directly run run-all-coverage.js with Node to avoid shell dependency
  const script = path.resolve(__dirname, 'run-all-coverage.js');
  execFileSync(process.execPath, [script], { cwd: path.dirname(script), stdio: 'inherit' });
}

function probeEncapsulationIncrease() {
  // Load base coverage
  const base = readJson(DATA_PATH);
  const baseTotal = base.coverage.total;

  const rules = readJson(RULES_PATH);
  const mutated = { ...rules, exclusiveGroups: (rules.exclusiveGroups || []).filter(g => g.name !== 'encapsulation') };
  const tmpPath = path.join(os.tmpdir(), `component-rules.probe.${Date.now()}.json`);
  fs.writeFileSync(tmpPath, JSON.stringify(mutated, null, 2));

  try {
    const coverageScript = path.resolve(__dirname, 'component-coverage.js');
    execFileSync(process.execPath, [coverageScript], {
      stdio: 'inherit',
      env: { ...process.env, COMPONENT_RULES_PATH: tmpPath },
    });
  } finally {
    // keep tmp rules for inspection
  }

  const probe = readJson(DATA_PATH);
  const probeTotal = probe.coverage.total;
  if (probeTotal <= baseTotal) {
    throw new Error(`Probe rules did not increase total permutations (base=${baseTotal}, probe=${probeTotal})`);
  }
  console.log(`Probe OK: permutations increased from ${baseTotal} -> ${probeTotal}`);
}

function main() {
  // 1) Refresh coverage
  refreshCoverage();

  const rules = readJson(RULES_PATH);
  const data = readJson(DATA_PATH);

  // 2) Assert covered === total
  const { covered, total } = data.coverage;
  if (covered !== total) {
    throw new Error(`Coverage drift: covered (${covered}) !== total (${total}). Run generate-missing-components then refresh.`);
  }
  console.log(`Coverage OK: ${covered}/${total}`);

  // 3) Assert .tsx count parity
  const tsxCount = countTsxFiles(COMPONENT_DIR);
  if (tsxCount !== covered) {
    throw new Error(`File count drift: ${tsxCount} .tsx files under component-decorator !== covered permutations ${covered}`);
  }
  console.log(`File count OK: ${tsxCount}`);

  // 4) Validate grouping and exclusivity
  for (const p of data.coveredPermutations) {
    // exclusivity
    if (!validateExclusivity(p.options, rules)) {
      throw new Error(`Exclusivity violation in options: ${p.options.join(' | ')}`);
    }
    // grouping for each file listed
    const expected = expectedGroupName(p.options, rules);
    for (const rel of p.files || []) {
      if (!rel.includes(`matrix/${expected}/`) && rel !== 'matrix/cmp-base.tsx') {
        throw new Error(`Grouping mismatch: expected ${expected} for ${rel} (options: ${p.options.join(' | ')})`);
      }
    }
  }
  console.log('Grouping and exclusivity OK');

  // Optional probe step: set VERIFY_PROBE_ENCAPSULATION=1 to verify rule-driven growth
  if (process.env.VERIFY_PROBE_ENCAPSULATION === '1') {
    probeEncapsulationIncrease();
  }

  console.log('verify-matrix completed successfully.');
}

main();
