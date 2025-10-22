import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { runVerifier } from '../_shared/verify-matrix-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/event/components');
function toPascalCase(tag) {
  return tag
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function buildNameSegments(options, rules) {
  const include = rules.emit?.naming?.includeOptions || ['bubbles','cancelable','composed'];
  const segs = [rules.emit?.naming?.prefix || 'event'];
  const optMap = { bubbles: options[0], cancelable: options[1], composed: options[2] };
  for (const opt of include) {
    const v = optMap[opt];
    if (v === undefined) continue;
    segs.push(v === '✓' ? opt : `${opt}-false`);
  }
  return segs;
}

function buildEventComponentSource(options, tag) {
  const [bubblesSym, cancelableSym, composedSym] = options;
  const bubbles = bubblesSym === '✓';
  const cancelable = cancelableSym === '✓';
  const composed = composedSym === '✓';
  const className = toPascalCase(tag);
  return `import { Component, Event, EventEmitter, h, Listen, State } from '@stencil/core';

@Component({ tag: '${tag}', shadow: true })
export class ${className} {
  @Event({ bubbles: ${bubbles}, cancelable: ${cancelable}, composed: ${composed} }) testEvent!: EventEmitter<void>;
  @State() counter = 0;

  @Listen('testEvent')
  onTestEvent() {
    this.counter++;
  }

  componentDidLoad() {
    // trigger an event once loaded so tests can assert the listener ran
    this.testEvent.emit();
  }

  render() {
    return (
      <div>
        <p>Options: bubbles=${bubbles} cancelable=${cancelable} composed=${composed}</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
`;
}

function buildComponentsIndex() {
  // Find all existing component files
  const files = [];
  function walk(dir) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(file => {
      const full = path.join(dir, file);
      if (fs.statSync(full).isDirectory()) {
        walk(full);
      } else if (file.endsWith('.tsx')) {
        files.push(full);
      }
    });
  }
  walk(OUTPUT_DIR);

  // Generate permutations from existing files
  const coveredPermutations = [];
  files.forEach(file => {
    const rel = path.relative(OUTPUT_DIR, file);
    const fileName = path.basename(file, '.tsx');
    
    // Extract options from filename: event-bubbles-[false-]cancelable-[false-]composed[-false]
    const bubbles = fileName.includes('bubbles-false') ? '✗' : '✓';
    const cancelable = fileName.includes('cancelable-false') ? '✗' : '✓';  
    const composed = fileName.includes('composed-false') ? '✗' : '✓';
    
    const permutation = [bubbles, cancelable, composed];
    coveredPermutations.push({
      options: permutation,
      count: 1,
      files: [rel]
    });
  });

  // Calculate all possible permutations
  const allPermutations = [];
  for (const bubbles of ['✓', '✗']) {
    for (const cancelable of ['✓', '✗']) {
      for (const composed of ['✓', '✗']) {
        allPermutations.push([bubbles, cancelable, composed]);
      }
    }
  }

  const coveredKeys = new Set(coveredPermutations.map(p => p.options.join('|')));
  const missing = allPermutations
    .filter(perm => !coveredKeys.has(perm.join('|')))
    .map(options => ({ options }));

  return {
    coverage: {
      covered: coveredPermutations.length,
      total: allPermutations.length,
      percent: ((coveredPermutations.length / allPermutations.length) * 100).toFixed(1),
    },
    coveredPermutations,
    missingPermutations: missing,
  };
}

async function main() {
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
  
  // Generate missing components first
  if (!fs.existsSync(DATA_PATH)) {
    console.error(`Missing data file: ${DATA_PATH}`);
    process.exit(1);
  }
  
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  
  let missing;
  if (forceRegenerate) {
    // When forcing, generate all possible permutations
    missing = [];
    for (const bubbles of ['✓', '✗']) {
      for (const cancelable of ['✓', '✗']) {
        for (const composed of ['✓', '✗']) {
          missing.push({ options: [bubbles, cancelable, composed] });
        }
      }
    }
    console.log(`Forcing regeneration of all ${missing.length} components...`);
  } else {
    missing = data.missingPermutations || [];
  }

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let created = 0;
  for (const entry of missing) {
    const options = entry.options;
    if (!Array.isArray(options) || options.length !== 3) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    const groupDir = options[0] === '✓' ? 'bubbles' : 'no-bubbles';
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    const filePath = path.join(targetDir, fileName);
    if (!forceRegenerate && fs.existsSync(filePath)) continue;

    const tag = baseName;
    const src = buildEventComponentSource(options, tag);
    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);
}

// Generate components first
await main();

// Use runVerifier for integrated workflow
runVerifier({
  decorator: 'event',
  baseDir: path.resolve(__dirname, '..'),
  rulesPath: RULES_PATH,
  dataPath: DATA_PATH,
  componentDir: OUTPUT_DIR,
  coverageRunner: () => {
    const refreshed = buildComponentsIndex();
    fs.writeFileSync(DATA_PATH, JSON.stringify(refreshed, null, 2));
  },
  logLabel: '@Event (generate+verify)',
});
