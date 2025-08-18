import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rootDir = path.resolve(__dirname, '../../../../../');
const searchDirs = [
  path.resolve(rootDir, 'src/components'),
  path.resolve(rootDir, 'test/wdio'),
];
const outputFile = path.resolve(__dirname, 'method-coverage-data.json');

const options = [
  ['true', 'false'], // async
  ['true', 'false'], // has arguments
  ['true', 'false'], // has return value
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

const methodRegex = /@Method\(\)\s*(async)?\s*([\w\d_]+)\s*\(([\s\S]*?)\)\s*(?::\s*([\s\S]+?))?\s*{/g;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = methodRegex.exec(content)) !== null) {
    const isAsync = !!match[1];
    const args = match[3].trim();
    const hasArgs = args !== '';
    const returnType = (match[4] || '').trim();
    let hasReturn = returnType !== 'void' && returnType !== '' && returnType !== 'Promise<void>';

    if (!hasReturn && !returnType) {
      const methodBodyStartIndex = match.index + match[0].length;
      let openBraces = 1;
      let bodyEndIndex = -1;
      for (let i = methodBodyStartIndex; i < content.length; i++) {
        if (content[i] === '{') {
          openBraces++;
        } else if (content[i] === '}') {
          openBraces--;
        }
        if (openBraces === 0) {
          bodyEndIndex = i;
          break;
        }
      }

      if (bodyEndIndex !== -1) {
        const methodBody = content.substring(methodBodyStartIndex, bodyEndIndex);
        if (/\breturn\b/.test(methodBody)) {
          hasReturn = true;
        }
      }
    }

    const permutation = [String(isAsync), String(hasArgs), String(hasReturn)];
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

console.log(`Method coverage data written to ${outputFile}`);
