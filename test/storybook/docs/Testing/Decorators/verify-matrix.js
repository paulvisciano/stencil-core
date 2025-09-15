import fs from 'fs';
import path from 'path';
import os from 'os';
import { execFileSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const AI_TESTING_DIR = path.resolve(__dirname, '../.ai/testing');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function getArg(name, def) {
  const pref = `--${name}=`;
  const a = process.argv.find(v => v.startsWith(pref));
  if (!a) return def;
  return a.slice(pref.length);
}

const DECORATOR = getArg('decorator', 'component'); // 'component' | 'state'

const CONFIG = (() => {
  if (DECORATOR === 'state') {
    const RULES_PATH = path.resolve(__dirname, 'State/rules.json');
    const DATA_PATH = path.resolve(__dirname, 'State/coverage-data.json');
    const COMPONENT_DIR = path.resolve(__dirname, '../../../../../test/wdio/state-new/matrix');
    return { RULES_PATH, DATA_PATH, COMPONENT_DIR };
  }
  // default: component
  const RULES_PATH = path.resolve(__dirname, 'Component/rules.json');
  const DATA_PATH = path.resolve(__dirname, 'Component/coverage-data.json');
  const COMPONENT_DIR = path.resolve(__dirname, '../../../../../test/wdio/component-decorator');
  return { RULES_PATH, DATA_PATH, COMPONENT_DIR };
})();

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

function coerceToComparable(actual, expected) {
  if (typeof expected === 'boolean') {
    if (actual === '✓' || actual === 'true' || actual === true) return true;
    if (actual === '✗' || actual === '-' || actual === 'false' || actual === false) return false;
    return Boolean(actual);
  }
  // string/other comparison
  return actual;
}

function expectedGroupName(pOptions, rules, optionOrder) {
  const modes = rules.modes || [];
  const actual = {};
  optionOrder.forEach((name, i) => (actual[name] = pOptions[i]));
  for (const m of modes) {
    const when = m.when || {};
    let ok = true;
    for (const k of Object.keys(when)) {
      const expect = when[k];
      const got = coerceToComparable(actual[k], expect);
      if (got !== expect) { ok = false; break; }
    }
    if (ok) return m.name;
  }
  return modes[0]?.name || 'default';
}

function validateExclusivity(pOptions, rules, optionOrder) {
  const groups = rules.exclusiveGroups || [];
  for (const g of groups) {
    let setCount = 0;
    for (const member of g.members) {
      const idx = optionOrder.indexOf(member);
      if (idx === -1) continue;
      const val = pOptions[idx];
      const isSet = val === '✓' || val === 'true' || val === true;
      if (isSet) setCount++;
    }
    if (setCount > 1) return false;
    if (g.allowNone === false && setCount === 0) return false;
  }
  return true;
}

function refreshCoverage() {
  const script = path.resolve(__dirname, 'run-all-coverage.js');
  execFileSync(process.execPath, [script], { cwd: path.dirname(script), stdio: 'inherit' });
}

function probeEncapsulationIncrease() {
  if (DECORATOR !== 'component') return; // only relevant to @Component
  const base = readJson(CONFIG.DATA_PATH);
  const baseTotal = base.coverage.total;

  const rules = readJson(CONFIG.RULES_PATH);
  const mutated = { ...rules, exclusiveGroups: (rules.exclusiveGroups || []).filter(g => g.name !== 'encapsulation') };
  const tmpPath = path.join(os.tmpdir(), `component-rules.probe.${Date.now()}.json`);
  fs.writeFileSync(tmpPath, JSON.stringify(mutated, null, 2));

  try {
    const coverageScript = path.resolve(__dirname, 'Component/coverage.js');
    execFileSync(process.execPath, [coverageScript], {
      stdio: 'inherit',
      env: { ...process.env, COMPONENT_RULES_PATH: tmpPath },
    });
  } finally {
    // keep tmp rules for inspection
  }

  const probe = readJson(CONFIG.DATA_PATH);
  const probeTotal = probe.coverage.total;
  if (probeTotal <= baseTotal) {
    throw new Error(`Probe rules did not increase total permutations (base=${baseTotal}, probe=${probeTotal})`);
  }
  console.log(`Probe OK: permutations increased from ${baseTotal} -> ${probeTotal}`);
}

function main() {
  refreshCoverage();

  const rules = readJson(CONFIG.RULES_PATH);
  const data = readJson(CONFIG.DATA_PATH);

  const optionOrder = rules.emit?.naming?.includeOptions || (DECORATOR === 'component'
    ? ['shadow','scoped','assetsDirs','formAssociated','styleUrl','styleUrls','styles']
    : ['type','hasDefault']);

  const { covered, total } = data.coverage;
  if (covered !== total) {
    const hint = DECORATOR === 'component' ? 'Component/generate-components' : 'State/generate-components';
    throw new Error(`Coverage drift for ${DECORATOR}: covered (${covered}) !== total (${total}). Run ${hint} then refresh.`);
  }
  console.log(`Coverage OK for ${DECORATOR}: ${covered}/${total}`);

  const tsxCount = countTsxFiles(CONFIG.COMPONENT_DIR);
  if (tsxCount !== covered) {
    throw new Error(`File count drift for ${DECORATOR}: ${tsxCount} .tsx files under ${CONFIG.COMPONENT_DIR} !== covered permutations ${covered}`);
  }
  console.log(`File count OK for ${DECORATOR}: ${tsxCount}`);

  for (const p of data.coveredPermutations) {
    if (!validateExclusivity(p.options, rules, optionOrder)) {
      throw new Error(`Exclusivity violation in options (${DECORATOR}): ${p.options.join(' | ')}`);
    }
    const expected = expectedGroupName(p.options, rules, optionOrder);
    for (const rel of p.files || []) {
      if (DECORATOR === 'component') {
        if (!rel.includes(`matrix/${expected}/`) && rel !== 'matrix/cmp-base.tsx') {
          throw new Error(`Grouping mismatch (${DECORATOR}): expected ${expected} for ${rel} (options: ${p.options.join(' | ')})`);
        }
      } else {
        if (!(rel.startsWith(`${expected}/`) || rel.includes(`/${expected}/`))) {
          throw new Error(`Grouping mismatch (${DECORATOR}): expected ${expected} for ${rel} (options: ${p.options.join(' | ')})`);
        }
      }
    }
  }
  console.log(`Grouping and exclusivity OK for ${DECORATOR}`);

  if (process.env.VERIFY_PROBE_ENCAPSULATION === '1') {
    probeEncapsulationIncrease();
  }

  console.log('verify-matrix completed successfully.');
}

main();
