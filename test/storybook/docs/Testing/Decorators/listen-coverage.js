import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIRS = [
  path.resolve(__dirname, '../../../../../test/end-to-end'),
  path.resolve(__dirname, '../../../../../test/wdio'),
];
const OPTIONS = ['target', 'capture'];
const TARGET_OPTIONS = ['window', 'document', 'body', 'host']; // 'parent' removed
const jsonPath = path.resolve(__dirname, 'listen-coverage-data.json');

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

function extractListenOptions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const listenRegex = /@Listen\s*\(([^)]*)\)/g;
  let match;
  const results = [];
  while ((match = listenRegex.exec(content)) !== null) {
    const optionsStr = match[1] || '';
    let target = 'host'; // default
    const targetMatch = optionsStr.match(/target:\s*['"]([^'"]+)['"]/);
    if (targetMatch) {
      target = targetMatch[1];
    }

    let capture = false; // default
    const captureMatch = optionsStr.match(/capture:\s*(true|false)/);
    if (captureMatch) {
      capture = captureMatch[1] === 'true';
    }
    results.push({ target, capture });
  }
  return results;
}

function normalizeValue(val, opt) {
  if (opt === 'capture') {
    return val ? '✓' : '✗';
  }
  return val;
}

function getAllPermutationKeys() {
  const allPermutations = [];
  const booleanOptions = ['✓', '✗'];
  for (const target of TARGET_OPTIONS) {
    for (const capture of booleanOptions) {
      allPermutations.push([target, capture].join('|'));
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
    coveredPermutations: coveredPermutations.map(p => ({ options: p.options, count: p.count })),
    missingPermutations: missingPermutations.map(p => ({ options: p.split('|') })),
  };
}

function main() {
  const allFoundListeners = [];
  TEST_DIRS.forEach(dir => {
    const files = findFiles(dir);
    files.forEach(file => {
      const listeners = extractListenOptions(file);
      if (listeners.length > 0) {
        allFoundListeners.push(...listeners);
      }
    });
  });

  const permutationMap = {};
  allFoundListeners.forEach(listener => {
    const keyArr = [listener.target, normalizeValue(listener.capture, 'capture')];
    const key = keyArr.join('|');
    if (!permutationMap[key]) {
      permutationMap[key] = { count: 0 };
    }
    permutationMap[key].count++;
  });

  const uniquePermutations = Object.entries(permutationMap).map(([key, val]) => {
    const opts = key.split('|');
    return { options: opts, count: val.count };
  });

  const allKeys = getAllPermutationKeys();
  const coveredKeys = new Set(Object.keys(permutationMap));
  const missingKeys = allKeys.filter(key => !coveredKeys.has(key));

  const totalPermutations = allKeys.length;
  const coveredCount = uniquePermutations.length;

  const jsonData = getCoverageData(coveredCount, totalPermutations, uniquePermutations, missingKeys);

  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));

  console.log(`Coverage data written to ${jsonPath}`);
}

main();
