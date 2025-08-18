import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIRS = [
  path.resolve(__dirname, '../../../../../test/end-to-end'),
  path.resolve(__dirname, '../../../../../test/wdio'),
];
const PROP_TYPES = ['boolean', 'string', 'number', 'Set', 'Array', 'Object'];
const OPTIONS = ['type', 'reflect', 'mutable'];
const mdxPath = path.resolve(__dirname, '@Prop.mdx');
const jsonPath = path.resolve(__dirname, 'prop-coverage-data.json');

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

function extractPropOptions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const propRegex = /@Prop\(([^)]*)\)\s*(\w+)\s*:\s*([\w\[\]]+)/g;
  let match;
  const results = [];
  while ((match = propRegex.exec(content)) !== null) {
    const propOptions = match[1];
    const type = match[3];
    let reflect = '✗';
    if (propOptions.includes('reflect: true')) {
      reflect = '✓';
    }
    let mutable = '✗';
    if (propOptions.includes('mutable: true')) {
      mutable = '✓';
    }

    let normalizedType = 'Object';
    if (type.toLowerCase().includes('string')) {
      normalizedType = 'string';
    } else if (type.toLowerCase().includes('boolean')) {
      normalizedType = 'boolean';
    } else if (type.toLowerCase().includes('number')) {
      normalizedType = 'number';
    } else if (type.toLowerCase().includes('set')) {
      normalizedType = 'Set';
    } else if (type.includes('[]') || type.toLowerCase().includes('array')) {
      normalizedType = 'Array';
    }

    results.push({ type: normalizedType, reflect, mutable });
  }
  return results;
}

function getAllPermutationKeys() {
  const allPermutations = [];
  for (const type of PROP_TYPES) {
    for (const reflect of ['✓', '✗']) {
      for (const mutable of ['✓', '✗']) {
        allPermutations.push(`${type}|${reflect}|${mutable}`);
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
    coveredPermutations: coveredPermutations.map(p => ({ options: p.options, count: p.count })),
    missingPermutations: missingPermutations.map(p => ({ options: p.split('|') })),
  };
}

function main() {
  const allFoundProps = [];
  TEST_DIRS.forEach(dir => {
    const files = findFiles(dir);
    files.forEach(file => {
      const props = extractPropOptions(file);
      if (props.length > 0) {
        allFoundProps.push(...props);
      }
    });
  });

  const permutationMap = {};
  allFoundProps.forEach(prop => {
    const key = `${prop.type}|${prop.reflect}|${prop.mutable}`;
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
