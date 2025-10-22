import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { runVerifier, writeJson } from '../_shared/verify-matrix-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/prop/components');

function toPascalCase(tag) {
  return tag
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

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

function main() {
  if (!fs.existsSync(RULES_PATH)) {
    console.error(`Missing rules file: ${RULES_PATH}`);
    process.exit(1);
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Check for --help flag
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log('Usage: node generate-components.js [options]');
    console.log('');
    console.log('Options:');
    console.log('  --force    Regenerate all components (even if they exist)');
    console.log('  --help     Show this help message');
    console.log('');
    console.log('By default, only missing components are generated.');
    console.log('Use --force when you modify the component template in this script.');
    return;
  }

  // Check for --force flag
  const forceRegenerate = process.argv.includes('--force');

  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));
  const index = buildComponentsIndex();
  const missing = index.missingPermutations || [];

  if (forceRegenerate) {
    console.log('🔄 Force regeneration enabled - will regenerate all components');
  }

  let created = 0;
  for (const entry of missing) {
    const options = entry.options;
    if (!Array.isArray(options) || options.length !== 3) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    const groupDir = String(options[0]);
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    const filePath = path.join(targetDir, fileName);
    if (!forceRegenerate && fs.existsSync(filePath)) continue;

    const tag = baseName;
    const src = buildPropComponentSource(options, tag);
    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);

  // Rebuild index and verify immediately (merged flow)
  runVerifier({
    decorator: 'prop',
    baseDir: path.resolve(__dirname, '..'),
    rulesPath: RULES_PATH,
    dataPath: DATA_PATH,
    componentDir: OUTPUT_DIR,
    coverageRunner: () => {
      const refreshed = buildComponentsIndex();
      writeJson(DATA_PATH, refreshed);
    },
    logLabel: '@Prop (generate+verify)',
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
