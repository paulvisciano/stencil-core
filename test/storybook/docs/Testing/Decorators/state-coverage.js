import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../../../../../');
const searchDirs = [
  path.resolve(rootDir, 'test/end-to-end'),
  path.resolve(rootDir, 'test/wdio'),
];
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

const files = searchDirs.flatMap(dir => globSync(`${dir}/**/*.{ts,tsx}`, {
  ignore: ['**/*.spec.ts', '**/*.e2e.ts'],
}));

const stateRegex = /@State\(\)\s+([\w\d_]+)\s*(?::\s*([\w\d\[\]<>{}|.'"]+))?(\s*=[\s\S]*?;)/g;

function getType(typeAnnotation, initializer) {
    if (typeAnnotation) {
        typeAnnotation = typeAnnotation.toLowerCase();
        if (typeAnnotation.includes('string')) return 'string';
        if (typeAnnotation.includes('number')) return 'number';
        if (typeAnnotation.includes('boolean')) return 'boolean';
        if (typeAnnotation.includes('[]') || typeAnnotation.includes('array')) return 'array';
        if (typeAnnotation.includes('{') || typeAnnotation.includes('object')) return 'object';
    }
    if (initializer) {
        const initStr = initializer.substring(1).trim(); // remove '='
        if (initStr.startsWith("'") || initStr.startsWith("`") || initStr.startsWith('"')) return 'string';
        if (!isNaN(parseFloat(initStr))) return 'number';
        if (initStr === 'true' || initStr === 'false') return 'boolean';
        if (initStr.startsWith('[')) return 'array';
        if (initStr.startsWith('{')) return 'object';
    }
    return 'any';
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
  }
});

const covered = Array.from(coveredPermutations.entries()).map(([key, count]) => {
  return {
    options: key.split(','),
    count: count,
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
