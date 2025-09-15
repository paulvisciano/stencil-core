// Combined scan-components & update-matrix script (moved under Component/)
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIRS = [
  path.resolve(__dirname, '../../../../../../test/wdio/component-decorator'),
];
const OPTIONS = ['shadow', 'scoped', 'assetsDirs', 'formAssociated', 'styleUrl', 'styleUrls', 'styles'];
const RULES_PATH = process.env.COMPONENT_RULES_PATH
  ? path.resolve(process.env.COMPONENT_RULES_PATH)
  : path.resolve(__dirname, 'rules.json');

function findFiles(dir, ext = '.tsx', excludeDirs = ['node_modules', '.cache']) {
  let results = [];
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (!excludeDirs.some(ex => file === ex)) {
        results = results.concat(findFiles(full, ext, excludeDirs));
      }
    } else if (file.endsWith(ext)) {
      results.push(full);
    }
  });
  return results;
}

function extractComponentOptions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/@Component\s*\(\s*\{([\s\S]*?)\}\s*\)/m);
  if (!match) return null;
  const options = {};
  OPTIONS.forEach(opt => {
    const optMatch = match[1].match(new RegExp(`\\s*${opt}\\s*:\\s*([^,\\n]+)`));
    if (optMatch) {
      options[opt] = optMatch[1].replace(/[\'"`]/g, '').trim();
    }
  });
  return options;
}

function normalizeValue(val, opt) {
  if (val === undefined) return '-';
  if (opt === 'shadow' || opt === 'scoped' || opt === 'formAssociated') {
    if (val === 'true' || val === true) return '✓';
    if (val === 'false' || val === false) return '✗';
    return '✓';
  }
  return val !== undefined && val !== 'false' ? '✓' : '-';
}

function parseRules() {
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));
  return rules;
}

function allowedSymbolsForOption(optionName, rules) {
  const t = rules.options[optionName];
  if (!t) return ['✓', '-'];
  if (t.startsWith('boolean')) return ['✓', '✗', '-'];
  return ['✓', '-'];
}

function buildAllPermutationKeysFromRules(rules) {
  const allowedMap = OPTIONS.map(opt => allowedSymbolsForOption(opt, rules));
  const out = [];
  const current = new Array(OPTIONS.length);
  const groups = rules.exclusiveGroups || [];

  function isValidByGroups() {
    for (const g of groups) {
      let setCount = 0;
      let specifiedCount = 0;
      for (const member of g.members) {
        const idx = OPTIONS.indexOf(member);
        if (idx === -1) continue;
        const sym = current[idx];
        if (sym !== undefined) {
          specifiedCount++;
          if (sym === '✓') setCount++;
        }
      }
      if (setCount > 1) return false;
      if (specifiedCount === g.members.length && g.allowNone === false && setCount === 0) return false;
    }
    return true;
  }

  function rec(i) {
    if (i === OPTIONS.length) {
      if (isValidByGroups()) out.push(current.join('|'));
      return;
    }
    for (const sym of allowedMap[i]) {
      current[i] = sym;
      if (isValidByGroups()) rec(i + 1);
    }
    current[i] = undefined;
  }

  rec(0);
  return out;
}

function checkCoveredPermutationValid(symbols, rules) {
  const groups = rules.exclusiveGroups || [];
  for (const g of groups) {
    let setCount = 0;
    for (const member of g.members) {
      const idx = OPTIONS.indexOf(member);
      if (idx === -1) continue;
      if (symbols[idx] === '✓') setCount++;
    }
    if (setCount > 1) return false;
    if (g.allowNone === false) {
      let hasOne = false;
      for (const member of g.members) {
        const idx = OPTIONS.indexOf(member);
        if (idx === -1) continue;
        if (symbols[idx] === '✓') { hasOne = true; break; }
      }
      if (!hasOne) return false;
    }
  }
  return true;
}

function getCoverageData(coveredCount, totalCount, coveredPermutations, missingPermutations) {
  const percent = totalCount > 0 ? ((coveredCount / totalCount) * 100).toFixed(1) : '0.0';
  return {
    coverage: { covered: coveredCount, total: totalCount, percent },
    coveredPermutations: coveredPermutations.map(p => ({ options: p.options, count: p.count, files: p.files })),
    missingPermutations: missingPermutations.map(p => ({ options: p.split('|') })),
  };
}

function main() {
  const rules = parseRules();

  const results = [];
  TEST_DIRS.forEach(dir => {
    const files = findFiles(dir);
    files.forEach(file => {
      const opts = extractComponentOptions(file);
      if (opts) results.push({ file, ...opts });
    });
  });

  const permutationMap = {};
  results.forEach(entry => {
    const keyArr = OPTIONS.map(opt => normalizeValue(entry[opt], opt));
    if (!checkCoveredPermutationValid(keyArr, rules)) {
      console.warn(`Skipping invalid permutation found in ${entry.file}: ${keyArr.join('|')}`);
      return;
    }
    const key = keyArr.join('|');
    if (!permutationMap[key]) permutationMap[key] = { count: 0, files: [] };
    permutationMap[key].count++;
    const rel = path.relative(TEST_DIRS[0], entry.file);
    permutationMap[key].files.push(rel);
  });

  const uniquePermutations = Object.entries(permutationMap).map(([key, val]) => ({ options: key.split('|'), count: val.count, files: val.files }));
  const allKeys = buildAllPermutationKeysFromRules(rules);
  const coveredKeys = new Set(Object.keys(permutationMap));
  const missingKeys = allKeys.filter(key => !coveredKeys.has(key));

  const totalPermutations = allKeys.length;
  const coveredCount = uniquePermutations.length;
  const jsonData = getCoverageData(coveredCount, totalPermutations, uniquePermutations, missingKeys);

  const jsonPath = path.resolve(__dirname, 'coverage-data.json');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log(`Coverage data written to ${jsonPath}`);
}

main();
