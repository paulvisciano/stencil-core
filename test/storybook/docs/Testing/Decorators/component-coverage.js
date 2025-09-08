// Combined scan-components & update-matrix script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIRS = [
  path.resolve(__dirname, '../../../../../test/wdio/component-decorator'),
];
const OPTIONS = ['shadow', 'scoped', 'assetsDirs', 'formAssociated', 'styleUrl', 'styleUrls', 'styles'];

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
    // Allow optional spaces around the property name and colon
    const optMatch = match[1].match(new RegExp(`\\s*${opt}\\s*:\\s*([^,\\n]+)`));
    if (optMatch) {
      options[opt] = optMatch[1].replace(/['"`]/g, '').trim();
    }
  });
  return options;
}

function normalizeValue(val, opt) {
  if (val === undefined) return '-';
  if (opt === 'shadow' || opt === 'scoped' || opt === 'formAssociated') {
    if (val === 'true' || val === true) return '✓';
    if (val === 'false' || val === false) return '✗';
    return '✓'; // treat any other value as set
  }
  // For string/array options
  return val !== undefined && val !== 'false' ? '✓' : '-';
}

function getAllPermutationKeys() {
  const baseOptions = {
    shadow: ['✓', '✗', '-'],
    scoped: ['✓', '✗', '-'],
    assetsDirs: ['✓', '-'],
    formAssociated: ['✓', '✗', '-'],
  };

  // There are 4 valid states for the style properties
  const stylePermutations = [
    ['✓', '-', '-'], // styleUrl set
    ['-', '✓', '-'], // styleUrls set
    ['-', '-', '✓'], // styles set
    ['-', '-', '-'], // none set
  ];

  const baseKeys = Object.keys(baseOptions);
  const allPermutations = [];

  function buildPermutations(current, index) {
    if (index === baseKeys.length) {
      // Once a base permutation is built, combine it with each valid style permutation
      stylePermutations.forEach(stylePerm => {
        allPermutations.push([...current, ...stylePerm].join('|'));
      });
      return;
    }

    const key = baseKeys[index];
    baseOptions[key].forEach(value => {
      buildPermutations([...current, value], index + 1);
    });
  }

  buildPermutations([], 0);
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
  // Scan for permutations
  const results = [];
  TEST_DIRS.forEach(dir => {
    const files = findFiles(dir);
    files.forEach(file => {
      const opts = extractComponentOptions(file);
      if (opts) {
        results.push({ file, ...opts });
      }
    });
  });

  // Group by unique permutation
  const permutationMap = {};
  results.forEach(entry => {
    const keyArr = OPTIONS.map(opt => normalizeValue(entry[opt], opt));
    // Enforce mutual exclusivity for styleUrl, styleUrls, styles in covered permutations
    const styleIdx = OPTIONS.indexOf('styleUrl');
    const styleUrlsIdx = OPTIONS.indexOf('styleUrls');
    const stylesIdx = OPTIONS.indexOf('styles');
    const styleSetCount = [keyArr[styleIdx], keyArr[styleUrlsIdx], keyArr[stylesIdx]].filter(v => v === '✓').length;
    if (styleSetCount > 1) {
      console.warn(`Skipping invalid permutation found in ${entry.file}: ${keyArr.join('|')}`);
      return; // skip invalid covered permutation
    }
    const key = keyArr.join('|');
    if (!permutationMap[key]) {
      permutationMap[key] = { count: 0, files: [] };
    }
    permutationMap[key].count++;
    permutationMap[key].files.push(path.basename(entry.file));
  });

  const uniquePermutations = Object.entries(permutationMap).map(([key, val]) => {
    const opts = key.split('|');
    return { options: opts, count: val.count, files: val.files };
  });

  // Find missing permutations
  const allKeys = getAllPermutationKeys();
  const coveredKeys = new Set(Object.keys(permutationMap));
  const missingKeys = allKeys.filter(key => !coveredKeys.has(key));

  // Calculate coverage
  const totalPermutations = allKeys.length;
  const coveredCount = uniquePermutations.length;

  // Generate JSON data
  const jsonData = getCoverageData(coveredCount, totalPermutations, uniquePermutations, missingKeys);

  // Write data to JSON file
  const jsonPath = path.resolve(__dirname, 'component-coverage-data.json');
  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));

  console.log(`Coverage data written to ${jsonPath}`);
}

main();
