import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { globSync } from 'glob';
import { runVerifier, writeJson } from '../_shared/verify-matrix-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/state/matrix');

function toPascalCase(tag) {
  return tag
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function buildNameSegments(options, rules) {
  const include = rules.emit?.naming?.includeOptions || ['type','hasDefault'];
  const segs = [rules.emit?.naming?.prefix || 'state'];
  const optMap = {
    type: options[0],
    hasDefault: options[1],
  };
  for (const opt of include) {
    const v = optMap[opt];
    if (v === undefined) continue;
    if (opt === 'hasDefault') {
      segs.push(v === 'true' ? 'default' : 'no-default');
    } else {
      segs.push(String(v));
    }
  }
  return segs;
}

function initializerFor(type, hasDefault) {
  if (hasDefault === 'false') return undefined;
  switch (type) {
    case 'string': return "'initial'";
    case 'number': return '0';
    case 'boolean': return 'false';
    case 'array': return '[]';
    case 'object': return '{}';
    case 'any': return "'any'";
    default: return undefined;
  }
}

function renderValue(type, varName) {
  switch (type) {
    case 'string': return `{${varName}}`;
    case 'number': return `{${varName}}`;
    case 'boolean': return `{${varName} ? 'true' : 'false'}`;
    case 'array': return `{JSON.stringify(${varName})}`;
    case 'object': return `{JSON.stringify(${varName})}`;
    case 'any': return `{String(${varName})}`;
  }
}

function changeExpr(type, varName) {
  switch (type) {
    case 'string': return `${varName} = 'changed'`;
    case 'number': return `${varName} = ${varName} + 1`;
    case 'boolean': return `${varName} = !${varName}`;
    case 'array': return `${varName} = [...${varName}, 'x']`;
    case 'object': return `${varName} = { ...${varName}, x: true }`;
    case 'any': return `${varName} = 'updated'`;
  }
}

function buildStateComponentSource(options, tag) {
  const [type, hasDefault] = options; // type, 'true'|'false'
  const className = toPascalCase(tag);
  const varName = 'val';
  const tsType = type === 'any' ? 'any' : type === 'array' ? 'any[]' : type;
  const init = initializerFor(type, hasDefault);
  const initLine = init ? ` = ${init}` : '';

  return `import { Component, h, State } from '@stencil/core';

@Component({
  tag: '${tag}',
  shadow: true,
})
export class ${className} {
  @State() ${varName}${tsType ? `: ${tsType}` : ''}${initLine};

  render() {
    return (
      <div>
        <p>Type: ${type} | Default: ${hasDefault}</p>
        <p>Value: ${renderValue(type, `this.${varName}`)}</p>
        <button onClick={() => (${changeExpr(type, `this.${varName}`)})}>Change</button>
      </div>
    );
  }
}
`;
}

function main() {
  if (!fs.existsSync(RULES_PATH)) {
    console.error(`Missing rules file: ${RULES_PATH}`);
    process.exit(1);
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));

  // Build or refresh components index locally to compute missing permutations
  const index = buildComponentsIndex();
  const missing = index.missingPermutations || [];

  let created = 0;
  for (const entry of missing) {
    const options = entry.options;
    if (!Array.isArray(options) || options.length !== 2) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    // Group by mode (type) within matrix
    const groupDir = options[0];
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, fileName);
    if (fs.existsSync(filePath)) continue;

    const tag = baseName;
    const src = buildStateComponentSource(options, tag);

    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);

  // Rebuild index and verify immediately (merged flow)
  runVerifier({
    decorator: 'state',
    baseDir: path.resolve(__dirname, '..'),
    rulesPath: RULES_PATH,
    dataPath: DATA_PATH,
    componentDir: OUTPUT_DIR,
    coverageRunner: () => {
      const refreshed = buildComponentsIndex();
      writeJson(DATA_PATH, refreshed);
    },
    logLabel: '@State (generate+verify)',
  });
}

main();

// Local helper: compute components.json structure from files on disk
function buildComponentsIndex() {
  const stateRoot = OUTPUT_DIR;
  const searchDirs = [stateRoot];

  const options = [
    ['string', 'number', 'boolean', 'array', 'object', 'any'], // type
    ['true', 'false'], // has default value
  ];

  function getPermutations(opts) {
    const results = [];
    (function permute(current, optionIndex) {
      if (optionIndex === opts.length) {
        results.push(current);
        return;
      }
      for (let i = 0; i < opts[optionIndex].length; i++) {
        permute(current.concat(opts[optionIndex][i]), optionIndex + 1);
      }
    })([], 0);
    return results;
  }

  const allPermutations = getPermutations(options);
  const coveredPermutations = new Map();
  const filesForPermutation = new Map();

  const files = searchDirs.flatMap(dir => globSync(`${dir}/**/*.{ts,tsx}`, {
    ignore: ['**/*.spec.ts', '**/*.e2e.ts'],
  }));

  const stateRegex = /@State\(\)\s+([\w\d_]+)\s*(?::\s*([\w\d\[\]<>\{\|\}=.'\"]+))?(\s*=\s*[^;]*;)?/g;

  function getType(typeAnnotation, initializer) {
    let type = 'any';
    if (typeAnnotation) {
      const annotation = String(typeAnnotation).toLowerCase();
      if (annotation.includes('string')) type = 'string';
      else if (annotation.includes('number')) type = 'number';
      else if (annotation.includes('boolean')) type = 'boolean';
      else if (annotation.includes('[]') || annotation.includes('array')) type = 'array';
      else if (annotation.includes('{') || annotation.includes('object')) type = 'object';
    }
    if (initializer) {
      const initStr = String(initializer).substring(1).trim().replace(/;$/, '');
      if (initStr === 'true' || initStr === 'false') type = 'boolean';
      else if (initStr.startsWith('\'') || initStr.startsWith('"') || initStr.startsWith('`')) type = 'string';
      else if (!isNaN(parseFloat(initStr)) && isFinite(initStr)) type = 'number';
      else if (initStr.startsWith('[')) type = 'array';
      else if (initStr.startsWith('{')) type = 'object';
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

  const covered = Array.from(coveredPermutations.entries()).map(([key, count]) => ({
    options: key.split(','),
    count,
    files: Array.from(filesForPermutation.get(key) || []),
  }));
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

  // Persist index for other consumers
  writeJson(DATA_PATH, coverageData);
  return coverageData;
}
