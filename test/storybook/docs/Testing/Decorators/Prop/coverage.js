import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIRS = [
  path.resolve(__dirname, '../../../../../../test/wdio/prop'),
];
const PROP_TYPES = ['boolean', 'string', 'number', 'Set', 'Array', 'Object'];
const OPTIONS = ['type', 'reflect', 'mutable'];
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

function extractPropOptions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const results = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('@Prop(')) {
      let propDecoratorLine = line;
      let propLine = '';
      let j = i;
      while (j < lines.length && !propDecoratorLine.includes(')')) {
        j++;
        if (j < lines.length) propDecoratorLine += ' ' + lines[j].trim();
      }
      const decoratorEndIndex = propDecoratorLine.indexOf(')');
      if (decoratorEndIndex !== -1 && propDecoratorLine.length > decoratorEndIndex + 1) {
        propLine = propDecoratorLine.substring(decoratorEndIndex + 1).trim();
      } else {
        j++;
        while (j < lines.length && lines[j].trim() === '') j++;
        if (j < lines.length) propLine = lines[j].trim();
      }
      const optionsMatch = propDecoratorLine.match(/@Prop\((.*?)\)/);
      const options = optionsMatch ? optionsMatch[1] : '';
      const reflect = /reflect\s*:\s*true/.test(options) ? '✓' : '✗';
      const mutable = /mutable\s*:\s*true/.test(options) ? '✓' : '✗';
      let normalizedType = 'Object';
      const typeMatch = propLine.match(/:\s*([\w<>\[\]\s,|]+?)(?:\s*=|;)/);
      if (typeMatch) {
        const type = typeMatch[1].trim();
        const lower = type.toLowerCase();
        if (lower.includes('set')) normalizedType = 'Set';
        else if (type.includes('[]') || lower.includes('array')) normalizedType = 'Array';
        else if (lower.includes('record') || lower.includes('object')) normalizedType = 'Object';
        else if (lower.includes('boolean')) normalizedType = 'boolean';
        else if (lower.includes('number')) normalizedType = 'number';
        else if (lower.includes('string')) normalizedType = 'string';
      } else {
        const initMatch = propLine.match(/=\s*(.+);?$/);
        if (initMatch) {
          const init = initMatch[1].trim().replace(/;$/, '');
          if (init.startsWith("'") || init.startsWith('"') || init.startsWith('`')) normalizedType = 'string';
          else if (init === 'true' || init === 'false') normalizedType = 'boolean';
          else if (!isNaN(parseFloat(init))) normalizedType = 'number';
          else if (init.toLowerCase().startsWith('new set')) normalizedType = 'Set';
          else if (init.startsWith('[')) normalizedType = 'Array';
          else if (init.startsWith('{')) normalizedType = 'Object';
        }
      }
      results.push({ type: normalizedType, reflect, mutable });
    }
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

function main() {
  const allFoundProps = [];
  const fileIndex = new Map();
  TEST_DIRS.forEach(dir => {
    const files = findFiles(dir);
    files.forEach(file => {
      const props = extractPropOptions(file);
      if (props.length > 0) {
        const rel = path.relative(path.resolve(__dirname, '../../../../../../test/wdio/prop'), file);
        props.forEach(p => {
          allFoundProps.push({ ...p, file: rel });
        });
      }
    });
  });

  const permutationMap = {};
  const filesForKey = new Map();
  allFoundProps.forEach(prop => {
    const key = `${prop.type}|${prop.reflect}|${prop.mutable}`;
    if (!permutationMap[key]) permutationMap[key] = { count: 0 };
    permutationMap[key].count++;
    if (!filesForKey.has(key)) filesForKey.set(key, new Set());
    filesForKey.get(key).add(prop.file);
  });

  const uniquePermutations = Object.entries(permutationMap).map(([key, val]) => {
    const opts = key.split('|');
    return { options: opts, count: val.count, files: Array.from(filesForKey.get(key) || []) };
  });

  const allKeys = getAllPermutationKeys();
  const coveredKeys = new Set(Object.keys(permutationMap));
  const missingKeys = allKeys.filter(key => !coveredKeys.has(key));

  const jsonData = {
    coverage: {
      covered: uniquePermutations.length,
      total: allKeys.length,
      percent: allKeys.length ? ((uniquePermutations.length / allKeys.length) * 100).toFixed(1) : '0.0',
    },
    coveredPermutations: uniquePermutations,
    missingPermutations: missingKeys.map(k => ({ options: k.split('|') })),
  };

  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));
  console.log(`Prop coverage data written to ${jsonPath}`);
}

main();
