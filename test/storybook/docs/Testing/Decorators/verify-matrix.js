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

const DECORATOR = getArg('decorator', 'component'); // 'component' | 'state' | 'prop'

const CONFIG = (() => {
  if (DECORATOR === 'state') {
    const RULES_PATH = path.resolve(__dirname, 'State/rules.json');
    const DATA_PATH = path.resolve(__dirname, 'State/coverage-data.json');
    const COMPONENT_DIR = path.resolve(__dirname, '../../../../../test/wdio/state/matrix');
    const TEST_FILE = path.resolve(__dirname, '../../../../../test/wdio/state/tests/cmp.test.tsx');
    const OVERLAY_OUT = path.resolve(__dirname, 'State/coverage-overlay.json');
    return { RULES_PATH, DATA_PATH, COMPONENT_DIR, TEST_FILE, OVERLAY_OUT };
  }
  if (DECORATOR === 'prop') {
    const RULES_PATH = path.resolve(__dirname, 'Prop/rules.json');
    const DATA_PATH = path.resolve(__dirname, 'Prop/coverage-data.json');
    const COMPONENT_DIR = path.resolve(__dirname, '../../../../../test/wdio/prop/matrix');
    const TEST_DIR = path.resolve(__dirname, '../../../../../test/wdio/prop/tests');
    const OVERLAY_OUT = path.resolve(__dirname, 'Prop/coverage-overlay.json');
    return { RULES_PATH, DATA_PATH, COMPONENT_DIR, TEST_DIR, OVERLAY_OUT };
  }
  // default: component
  const RULES_PATH = path.resolve(__dirname, 'Component/rules.json');
  const DATA_PATH = path.resolve(__dirname, 'Component/coverage-data.json');
  const COMPONENT_DIR = path.resolve(__dirname, '../../../../../test/wdio/component-decorator');
  const TEST_DIR = path.resolve(__dirname, '../../../../../test/wdio/component-decorator/tests');
  const OVERLAY_OUT = path.resolve(__dirname, 'Component/coverage-overlay.json');
  return { RULES_PATH, DATA_PATH, COMPONENT_DIR, TEST_DIR, OVERLAY_OUT };
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

// Build state coverage overlay JSON by parsing WDIO test usage
function buildStateOverlay() {
  if (DECORATOR !== 'state') return;
  const data = readJson(CONFIG.DATA_PATH);
  const testSrc = fs.readFileSync(CONFIG.TEST_FILE, 'utf8');

  // tag -> [test titles]
  const manifest = new Map();
  const itBlockRe = /it\(\s*([`'\"])\s*([^\1]+?)\s*\1\s*,\s*async\s*\(\)\s*=>\s*\{([\s\S]*?)\}\s*\)/g;
  let m;
  while ((m = itBlockRe.exec(testSrc)) !== null) {
    const title = m[2].trim();
    const body = m[3] || '';
    const tagRe = /\$\(\s*([`'\"])\s*(state-[^\1>\s]+)\s*\1\s*\)/g;
    let tm;
    const tagsInThisTest = new Set();
    while ((tm = tagRe.exec(body)) !== null) {
      tagsInThisTest.add(tm[2]);
    }
    for (const tag of tagsInThisTest) {
      if (!manifest.has(tag)) manifest.set(tag, []);
      manifest.get(tag).push(title);
    }
  }
  if (manifest.size === 0) {
    const tagRe = /\$\(\s*([`'\"])\s*(state-[^\1>\s]+)\s*\1\s*\)/g;
    let tm;
    while ((tm = tagRe.exec(testSrc)) !== null) {
      const tag = tm[2];
      if (!manifest.has(tag)) manifest.set(tag, []);
    }
  }

  const items = [];
  for (const p of data.coveredPermutations) {
    const type = p.options?.[0];
    const hasDefault = String(p.options?.[1]) === 'true';
    const files = p.files || [];
    const tags = files.map(rel => path.basename(rel, path.extname(rel)));
    const tag = tags[0] || null;
    const testedBy = tag && manifest.has(tag) ? manifest.get(tag) : [];
    const tested = (testedBy && testedBy.length > 0) || (tag && manifest.has(tag));
    items.push({ group: type, options: { type, hasDefault }, files, tag, tested, testedBy });
  }

  const stats = {
    totalPermutations: items.length,
    testedPermutations: items.filter(i => i.tested).length,
    percentTested: items.length ? ((items.filter(i => i.tested).length / items.length) * 100).toFixed(2) : '0.00',
  };

  const out = { coverage: readJson(CONFIG.DATA_PATH).coverage, stats, items };
  fs.writeFileSync(CONFIG.OVERLAY_OUT, JSON.stringify(out, null, 2));
  console.log(`State coverage overlay written to ${CONFIG.OVERLAY_OUT}`);
}

// Build component coverage overlay JSON by parsing WDIO test usage
function buildComponentOverlay() {
  if (DECORATOR !== 'component') return;
  const data = readJson(CONFIG.DATA_PATH);
  // Collect test contents (directory can be empty)
  let testSources = '';
  try {
    if (fs.existsSync(CONFIG.TEST_DIR)) {
      const entries = fs.readdirSync(CONFIG.TEST_DIR, { withFileTypes: true });
      for (const e of entries) {
        if (e.isFile() && /\.test\.(t|j)sx?$/.test(e.name)) {
          const p = path.join(CONFIG.TEST_DIR, e.name);
          testSources += '\n' + fs.readFileSync(p, 'utf8');
        }
      }
    }
  } catch {}

  // tag -> [test titles]
  const manifest = new Map();
  const itBlockRe = /it\(\s*([`'\"])\s*([^\1]+?)\s*\1\s*,\s*async\s*\(\)\s*=>\s*\{([\s\S]*?)\}\s*\)/g;
  let m;
  while ((m = itBlockRe.exec(testSources)) !== null) {
    const title = m[2].trim();
    const body = m[3] || '';
    const tagRe = /\$\(\s*([`'\"])\s*([a-z0-9-]+)\s*\1\s*\)/gi;
    let tm;
    const tagsInThisTest = new Set();
    while ((tm = tagRe.exec(body)) !== null) tagsInThisTest.add(tm[2]);
    for (const tag of tagsInThisTest) {
      if (!manifest.has(tag)) manifest.set(tag, []);
      manifest.get(tag).push(title);
    }
  }

  const rules = readJson(CONFIG.RULES_PATH);
  const optionOrder = rules.emit?.naming?.includeOptions || ['shadow','scoped','assetsDirs','formAssociated','styleUrl','styleUrls','styles'];

  const items = [];
  for (const p of data.coveredPermutations) {
    // files are rel to COMPONENT_DIR/matrix
    const files = p.files || [];
    // pick a component file (ignore cmp-base.tsx)
    const primary = files.find(rel => !rel.endsWith('matrix/cmp-base.tsx')) || files[0] || null;
    const base = primary ? path.basename(primary, path.extname(primary)) : null;
    const tag = base || null;

    const optsArr = p.options || [];
    const opts = {};
    optionOrder.forEach((name, i) => (opts[name] = optsArr[i]));

    const testedBy = tag && manifest.has(tag) ? manifest.get(tag) : [];
    const tested = (testedBy && testedBy.length > 0) || (tag && manifest.has(tag));

    const group = expectedGroupName(optsArr, rules, optionOrder);

    items.push({ group, options: opts, optionsKey: (optsArr || []).join('|'), files, tag, tested, testedBy });
  }

  const stats = {
    totalPermutations: items.length,
    testedPermutations: items.filter(i => i.tested).length,
    percentTested: items.length ? ((items.filter(i => i.tested).length / items.length) * 100).toFixed(2) : '0.00',
  };

  const out = { coverage: readJson(CONFIG.DATA_PATH).coverage, stats, items };
  fs.writeFileSync(CONFIG.OVERLAY_OUT, JSON.stringify(out, null, 2));
  console.log(`Component coverage overlay written to ${CONFIG.OVERLAY_OUT}`);
}

// Build prop coverage overlay JSON by parsing WDIO test usage
function buildPropOverlay() {
  if (DECORATOR !== 'prop') return;
  const data = readJson(CONFIG.DATA_PATH);
  let testSources = '';
  try {
    if (fs.existsSync(CONFIG.TEST_DIR)) {
      const entries = fs.readdirSync(CONFIG.TEST_DIR, { withFileTypes: true });
      for (const e of entries) {
        if (e.isFile() && /\.test\.(t|j)sx?$/.test(e.name)) {
          const p = path.join(CONFIG.TEST_DIR, e.name);
          testSources += '\n' + fs.readFileSync(p, 'utf8');
        }
      }
    }
  } catch {}

  const manifest = new Map();
  const itBlockRe = /it\(\s*([`'\"])\s*([^\1]+?)\s*\1\s*,\s*async\s*\(\)\s*=>\s*\{([\s\S]*?)\}\s*\)/g;
  let m;
  while ((m = itBlockRe.exec(testSources)) !== null) {
    const title = m[2].trim();
    const body = m[3] || '';
    const tagRe = /\$\(\s*([`'\"])\s*([a-z0-9-]+)\s*\1\s*\)/gi;
    let tm;
    const tagsInThisTest = new Set();
    while ((tm = tagRe.exec(body)) !== null) tagsInThisTest.add(tm[2]);
    for (const tag of tagsInThisTest) {
      if (!manifest.has(tag)) manifest.set(tag, []);
      manifest.get(tag).push(title);
    }
  }

  const rules = readJson(CONFIG.RULES_PATH);
  const optionOrder = rules.emit?.naming?.includeOptions || ['type','reflect','mutable'];

  const items = [];
  for (const p of data.coveredPermutations) {
    const files = p.files || [];
    const primary = files[0] || null;
    const base = primary ? path.basename(primary, path.extname(primary)) : null;
    const tag = base || null;
    const optsArr = p.options || [];
    const opts = {};
    optionOrder.forEach((name, i) => (opts[name] = optsArr[i]));
    const testedBy = tag && manifest.has(tag) ? manifest.get(tag) : [];
    const tested = (testedBy && testedBy.length > 0) || (tag && manifest.has(tag));
    const group = optsArr[0];
    items.push({ group, options: opts, optionsKey: (optsArr || []).join('|'), files, tag, tested, testedBy });
  }

  const stats = {
    totalPermutations: items.length,
    testedPermutations: items.filter(i => i.tested).length,
    percentTested: items.length ? ((items.filter(i => i.tested).length / items.length) * 100).toFixed(2) : '0.00',
  };

  const out = { coverage: readJson(CONFIG.DATA_PATH).coverage, stats, items };
  fs.writeFileSync(CONFIG.OVERLAY_OUT, JSON.stringify(out, null, 2));
  console.log(`Prop coverage overlay written to ${CONFIG.OVERLAY_OUT}`);
}

function main() {
  refreshCoverage();

  const rules = readJson(CONFIG.RULES_PATH);
  const data = readJson(CONFIG.DATA_PATH);

  const optionOrder = rules.emit?.naming?.includeOptions || (DECORATOR === 'component'
    ? ['shadow','scoped','assetsDirs','formAssociated','styleUrl','styleUrls','styles']
    : DECORATOR === 'prop'
    ? ['type','reflect','mutable']
    : ['type','hasDefault']);

  const { covered, total } = data.coverage;
  if (covered !== total) {
    const hint = DECORATOR === 'component' ? 'Component/generate-components' : DECORATOR === 'prop' ? 'Prop/generate-components' : 'State/generate-components';
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

  // Build overlay for @State after verification
  if (DECORATOR === 'state') {
    buildStateOverlay();
  }
  // Build overlay for @Component after verification
  if (DECORATOR === 'component') {
    buildComponentOverlay();
  }
  // Build overlay for @Prop after verification
  if (DECORATOR === 'prop') {
    buildPropOverlay();
  }

  console.log('verify-matrix completed successfully.');
}

main();
