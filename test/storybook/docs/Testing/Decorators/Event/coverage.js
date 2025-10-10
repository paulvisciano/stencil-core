import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIR = path.resolve(__dirname, '../../../../../../test/wdio/event/matrix');
const OPTIONS = ['bubbles', 'cancelable', 'composed'];
const jsonPath = path.resolve(__dirname, 'coverage-data.json');

function findFiles(dir, ext = '.tsx', excludeDirs = ['node_modules', '.cache']) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
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

function extractEventOptions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const eventRegex = /@Event\s*(\([^)]*\))?/g;
  let match;
  const results = [];
  while ((match = eventRegex.exec(content)) !== null) {
    const optionsStr = match[1] || '';
    const options = {
      bubbles: !optionsStr.includes('bubbles: false'),
      cancelable: !optionsStr.includes('cancelable: false'),
      composed: !optionsStr.includes('composed: false'),
    };
    results.push(options);
  }
  return results;
}

function normalizeValue(val) {
  return val ? '✓' : '✗';
}

function getAllPermutationKeys() {
  const allPermutations = [];
  const booleanOptions = ['✓', '✗'];
  for (const bubbles of booleanOptions) {
    for (const cancelable of booleanOptions) {
      for (const composed of booleanOptions) {
        allPermutations.push([bubbles, cancelable, composed].join('|'));
      }
    }
  }
  return allPermutations;
}

function getCoverageData(coveredCount, totalCount, coveredPermutations, missingPermutations) {
  const percent = totalCount > 0 ? ((coveredCount / totalCount) * 100).toFixed(1) : '0.0';
  return {
    coverage: {
      covered: coveredCount,
      total: totalCount,
      percent: percent,
    },
    coveredPermutations: coveredPermutations.map(p => ({ options: p.options, count: p.count, files: p.files })),
    missingPermutations: missingPermutations.map(p => ({ options: p.split('|') })),
  };
}

function main() {
  const allFound = [];
  const files = findFiles(TEST_DIR);
  files.forEach(file => {
    const events = extractEventOptions(file);
    if (events.length > 0) {
      const rel = path.relative(TEST_DIR, file);
      events.forEach(ev => allFound.push({ ...ev, file: rel }));
    }
  });

  const permutationMap = {};
  const filesForKey = new Map();
  allFound.forEach(ev => {
    const keyArr = OPTIONS.map(opt => normalizeValue(ev[opt]));
    const key = keyArr.join('|');
    if (!permutationMap[key]) permutationMap[key] = { count: 0 };
    permutationMap[key].count++;
    if (!filesForKey.has(key)) filesForKey.set(key, new Set());
    filesForKey.get(key).add(ev.file);
  });

  const uniquePermutations = Object.entries(permutationMap).map(([key, val]) => {
    const opts = key.split('|');
    return { options: opts, count: val.count, files: Array.from(filesForKey.get(key) || []) };
  });

  const allKeys = getAllPermutationKeys();
  const coveredKeys = new Set(Object.keys(permutationMap));
  const missingKeys = allKeys.filter(key => !coveredKeys.has(key));

  const totalPermutations = allKeys.length;
  const coveredCount = uniquePermutations.length;

  const jsonData = getCoverageData(coveredCount, totalPermutations, uniquePermutations, missingKeys);

  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));

  console.log(`Event coverage data written to ${jsonPath}`);
}

main();
