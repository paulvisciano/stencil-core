import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeJson } from '../_shared/verify-matrix-core.js';
import { generateComponentsMain, toPascalCase } from '../_shared/generate-components-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/prop/components');

// toPascalCase now imported from shared core

function buildNameSegments(options, rules) {
  const include = rules.emit?.naming?.includeOptions || ['type','reflect','mutable'];
  const segs = [rules.emit?.naming?.prefix || 'prop'];
  const optMap = { type: options[0], reflect: options[1], mutable: options[2] };
  for (const opt of include) {
    const v = optMap[opt];
    if (v === undefined) continue;
    if (opt === 'reflect' || opt === 'mutable') {
      segs.push(v === '✓' ? opt : `${opt}-false`);
    } else {
      segs.push(String(v).toLowerCase());
    }
  }
  return segs;
}

function tsTypeFor(t) {
  switch (t) {
    case 'string': return 'string';
    case 'number': return 'number';
    case 'boolean': return 'boolean';
    case 'Array': return 'any[]';
    case 'Object': return 'Record<string, any>';
    case 'Set': return 'Set<string>';
    default: return 'any';
  }
}

function defaultValueFor(t) {
  switch (t) {
    case 'string': return "'init'";
    case 'number': return '0';
    case 'boolean': return 'false';
    case 'Array': return '[]';
    case 'Object': return '{}';
    case 'Set': return 'new Set()';
    default: return 'undefined';
  }
}

function renderValueExpr(t, v) {
  switch (t) {
    case 'boolean': return `{${v} ? 'true' : 'false'}`;
    case 'Array':
    case 'Object': return `{JSON.stringify(${v})}`;
    case 'Set': return `{Array.from(${v}).join(',')}`;
    default: return `{${v}}`;
  }
}

function buildPropComponentSource(options, tag) {
  const [type, reflectSym, mutableSym] = options; // e.g. ['string','✓','✗']
  const reflect = reflectSym === '✓';
  const mutable = mutableSym === '✓';
  const className = toPascalCase(tag);
  const tsType = tsTypeFor(type);
  const init = defaultValueFor(type);

  return `import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: '${tag}',
  shadow: true,
})
export class ${className} {
  @Prop({ reflect: ${reflect}, mutable: ${mutable} }) val!: ${tsType};

  render() {
    const v = this.val ?? ${init};
    return (
      <div>
        <p>Type: ${type} | reflect: ${reflect} | mutable: ${mutable}</p>
        <p>Value: ${renderValueExpr(type, 'v')}</p>
      </div>
    );
  }
}
`;
}

// Decorator-specific: Generate all possible permutations
function getAllPermutations() {
  const permutations = [];
  const types = ['string', 'number', 'boolean', 'Array', 'Object', 'Set'];
  const reflectOptions = ['✓', '✗'];
  const mutableOptions = ['✓', '✗'];
  
  for (const type of types) {
    for (const reflect of reflectOptions) {
      for (const mutable of mutableOptions) {
        permutations.push({ options: [type, reflect, mutable] });
      }
    }
  }
  return permutations;
}

// Use shared main function
function main() {
  generateComponentsMain({
    // Paths
    rulesPath: RULES_PATH,
    dataPath: DATA_PATH,
    outputDir: OUTPUT_DIR,
    
    // Decorator config
    decorator: 'prop',
    
    // Decorator-specific functions
    buildNameSegments,
    buildComponentSource: buildPropComponentSource,
    buildComponentsIndex,
    getAllPermutations,
    
    // Optional overrides
    getGroupDir: (options) => String(options[0]), // Group by type (first option)
    logLabel: '@Prop (generate+verify)'
  });
}

main();

// Local helper: compute components.json structure from files on disk (Prop)
function buildComponentsIndex() {
  const propRoot = OUTPUT_DIR;
  const options = [
    ['boolean', 'string', 'number', 'Set', 'Array', 'Object'], // type
    ['✓', '✗'], // reflect
    ['✓', '✗'], // mutable
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

  // Walk all ts/tsx files under components dir
  const files = [];
  if (fs.existsSync(propRoot)) {
    const walk = d => {
      for (const name of fs.readdirSync(d)) {
        const p = path.join(d, name);
        const s = fs.statSync(p);
        if (s.isDirectory()) walk(p);
        else if (name.endsWith('.ts') || name.endsWith('.tsx')) files.push(p);
      }
    };
    walk(propRoot);
  }

  function reflectFromName(name) {
    if (name.includes('reflect-false')) return '✗';
    if (name.includes('reflect')) return '✓';
    return '✗';
  }

  function mutableFromName(name) {
    if (name.includes('mutable-false')) return '✗';
    if (name.includes('mutable')) return '✓';
    return '✗';
  }

  files.forEach(file => {
    const rel = path.relative(propRoot, file);
    const segs = rel.split(path.sep);
    const typeDir = segs[0];
    const base = path.basename(file, path.extname(file));
    let type = typeDir;
    if (['boolean','string','number'].includes(typeDir)) type = typeDir;
    else if (/^set$/i.test(typeDir)) type = 'Set';
    else if (/^array$/i.test(typeDir)) type = 'Array';
    else if (/^object$/i.test(typeDir)) type = 'Object';
    const reflect = reflectFromName(base);
    const mutable = mutableFromName(base);
    const permutation = [type, reflect, mutable];
    const key = permutation.join('|');
    coveredPermutations.set(key, (coveredPermutations.get(key) || 0) + 1);
    if (!filesForPermutation.has(key)) filesForPermutation.set(key, new Set());
    filesForPermutation.get(key).add(rel);
  });

  const covered = Array.from(coveredPermutations.entries()).map(([key, count]) => ({
    options: key.split('|'),
    count,
    files: Array.from(filesForPermutation.get(key) || []),
  }));
  const coveredKeys = new Set(coveredPermutations.keys());
  const missing = allPermutations
    .map(p => ({ options: p }))
    .filter(p => !coveredKeys.has(p.options.join('|')));

  const coverageData = {
    coverage: {
      covered: covered.length,
      total: allPermutations.length,
      percent: allPermutations.length ? ((covered.length / allPermutations.length) * 100).toFixed(2) : '0.00',
    },
    coveredPermutations: covered,
    missingPermutations: missing,
  };

  writeJson(DATA_PATH, coverageData);
  return coverageData;
}

