import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIRS = [
  // Only scan generated matrix components to avoid legacy/non-matrix noise
  path.resolve(__dirname, '../../../../../../test/wdio/listen/matrix'),
];
const OPTIONS = ['target', 'event', 'capture', 'passive'];
const TARGET_OPTIONS = ['window', 'document', 'body', 'host'];
const VALID_EVENTS = {
  window: ['click', 'keydown'],
  document: ['click', 'keydown', 'input'],
  body: ['click', 'keydown', 'input'],
  host: ['click', 'keydown', 'input'],
};
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

function extractListenOptions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const listenRegex = /@Listen\s*\(([^)]*)\)/g;
  let match;
  const results = [];
  while ((match = listenRegex.exec(content)) !== null) {
    const optionsStr = match[1] || '';
    let target = 'host';
    const targetMatch = optionsStr.match(/target:\s*['"]([^'\"]+)['"]/);
    if (targetMatch) target = targetMatch[1];
    let event = '';
    const eventMatch = optionsStr.match(/['"]([^'\"]+)['"]/);
    if (eventMatch) event = eventMatch[1];
    let capture = false;
    const captureMatch = optionsStr.match(/capture:\s*(true|false)/);
    if (captureMatch) capture = captureMatch[1] === 'true';
    let passive = false;
    const passiveMatch = optionsStr.match(/passive:\s*(true|false)/);
    if (passiveMatch) passive = passiveMatch[1] === 'true';
    results.push({ target, event, capture, passive });
  }
  return results;
}

function normalizeValue(val, opt) {
  if (opt === 'capture' || opt === 'passive') return val ? '✓' : '✗';
  return val;
}

function getAllPermutationKeys() {
  const allPermutations = [];
  for (const target of TARGET_OPTIONS) {
    for (const event of VALID_EVENTS[target]) {
      for (const capture of ['✓', '✗']) {
        for (const passive of ['✓', '✗']) {
          allPermutations.push([target, event, capture, passive].join('|'));
        }
      }
    }
  }
  return allPermutations;
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
  const allFound = [];
  TEST_DIRS.forEach(dir => {
    const files = findFiles(dir);
    files.forEach(file => {
      const listens = extractListenOptions(file);
      if (listens.length > 0) {
        const rel = path.relative(TEST_DIRS[0], file);
        listens.forEach(l => allFound.push({ ...l, file: rel }));
      }
    });
  });

  const permutationMap = {};
  const filesForKey = new Map();
  allFound.forEach(l => {
    const keyArr = [l.target, l.event, normalizeValue(l.capture, 'capture'), normalizeValue(l.passive, 'passive')];
    const key = keyArr.join('|');
    if (!permutationMap[key]) permutationMap[key] = { count: 0 };
    permutationMap[key].count++;
    if (!filesForKey.has(key)) filesForKey.set(key, new Set());
    filesForKey.get(key).add(l.file);
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
  console.log(`Listen coverage data written to ${jsonPath}`);
}

main();
