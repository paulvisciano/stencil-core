import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../../../../../..');
const stateRoot = path.resolve(rootDir, 'test/wdio/state-new/matrix');
const searchDirs = [stateRoot];
const outputFile = path.resolve(__dirname, 'state-coverage-data.json');

const options = [
  ['string', 'number', 'boolean', 'array', 'object', 'any'], // type
  ['true', 'false'], // has default value
];

function getPermutations(options) {
  const results = [];
  function permute(current, optionIndex) {
    if (optionIndex === options.length) {
      results.push(current);
      return;
    }
    for (let i = 0; i < options[optionIndex].length; i++) {
      permute(current.concat(options[optionIndex][i]), optionIndex + 1);
    }
  }
  permute([], 0);
  return results;
}

const allPermutations = getPermutations(options);
const coveredPermutations = new Map();
const filesForPermutation = new Map();

const files = searchDirs.flatMap(dir => globSync(`${dir}/**/*.{ts,tsx}`, {
  ignore: ['**/*.spec.ts', '**/*.e2e.ts'],
}));

const stateRegex = /@State\(\)\s+([\w\d_]+)\s*(?::\s*([\w\d\[\]<>{}|=.'"]+))?(\s*=\s*[^;]*;)?/g;

function getType(typeAnnotation, initializer) {
  let type = 'any'; // Default type

  if (typeAnnotation) {
    const annotation = typeAnnotation.toLowerCase();
    if (annotation.includes('string')) type = 'string';
    else if (annotation.includes('number')) type = 'number';
    else if (annotation.includes('boolean')) type = 'boolean';
    else if (annotation.includes('[]') || annotation.includes('array')) type = 'array';
    else if (annotation.includes('{') || annotation.includes('object')) type = 'object';
  }

  if (initializer) {
    const initStr = initializer.substring(1).trim().replace(/;$/, '');
    if (initStr === 'true' || initStr === 'false') {
      type = 'boolean';
    } else if (initStr.startsWith("'") || initStr.startsWith('"') || initStr.startsWith('`')) {
      type = 'string';
    } else if (!isNaN(parseFloat(initStr)) && isFinite(initStr)) {
      type = 'number';
    } else if (initStr.startsWith('[')) {
      type = 'array';
    } else if (initStr.startsWith('{')) {
      type = 'object';
    }
  }

  return type;
}

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = stateRegex.exec(content)) !== null) {
    const typeAnnotation = match[2];
    const initializer = match[3];
    const hasDefaultValue = !!initializer;
    const type = getType(typeAnnotation, initializer);

    const permutation = [type, String(hasDefaultValue)];
    const key = permutation.join(',');

    coveredPermutations.set(key, (coveredPermutations.get(key) || 0) + 1);

    const rel = path.relative(stateRoot, file);
    if (!filesForPermutation.has(key)) filesForPermutation.set(key, new Set());
    filesForPermutation.get(key).add(rel);
  }
});

const covered = Array.from(coveredPermutations.entries()).map(([key, count]) => {
  return {
    options: key.split(','),
    count: count,
    files: Array.from(filesForPermutation.get(key) || []),
  };
});

const coveredKeys = new Set(coveredPermutations.keys());
const missing = allPermutations
  .map(p => ({ options: p }))
  .filter(p => !coveredKeys.has(p.options.join(',')));

const coverageData = {
  coverage: {
    covered: covered.length,
    total: allPermutations.length,
    percent: ((covered.length / allPermutations.length) * 100).toFixed(2),
  },
  coveredPermutations: covered,
  missingPermutations: missing,
};

fs.writeFileSync(outputFile, JSON.stringify(coverageData, null, 2));

console.log(`State coverage data written to ${outputFile}`);
