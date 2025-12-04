import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeJson } from '../_shared/verify-matrix-core.js';
import { generateComponentsMain, toPascalCase } from '../_shared/generate-components-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/event/components');
// toPascalCase now imported from shared core

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

// Decorator-specific: Generate all possible permutations
function getAllPermutations() {
  const permutations = [];
  for (const bubbles of ['✓', '✗']) {
    for (const cancelable of ['✓', '✗']) {
      for (const composed of ['✓', '✗']) {
        permutations.push({ options: [bubbles, cancelable, composed] });
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
    decorator: 'event',
    
    // Decorator-specific functions
    buildNameSegments,
    buildComponentSource: buildEventComponentSource,
    buildComponentsIndex,
    getAllPermutations,
    
    // Optional overrides
    getGroupDir: (options) => options[0] === '✓' ? 'bubbles' : 'no-bubbles', // Group by bubbles behavior
    logLabel: '@Event (generate+verify)'
  });
}

main();
