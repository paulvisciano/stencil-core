import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeJson } from '../_shared/verify-matrix-core.js';
import { generateComponentsMain, toPascalCase } from '../_shared/generate-components-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/method/components');

// toPascalCase now imported from shared core

function buildNameSegments(options, rules) {
  const include = rules.emit?.naming?.includeOptions || ['returns','async','args'];
  const segs = [rules.emit?.naming?.prefix || 'method'];
  const optMap = { returns: options[0], async: options[1], args: options[2] };
  for (const opt of include) {
    const v = optMap[opt];
    if (v === undefined) continue;
    if (opt === 'async') {
      segs.push('async');
      segs.push(v === '✓' ? 'true' : 'false');
    } else if (opt === 'args') {
      segs.push('args');
      segs.push(String(v));
    } else {
      segs.push(String(v));
    }
  }
  return segs;
}

function buildMethodComponentSource(options, tag) {
  const [returns, asyncFlag, args] = options;
  const isAsync = asyncFlag === '✓';
  const className = toPascalCase(tag);
  const argName = args === 'one' ? 'x' : '';
  const methodSig = `@Method() ${isAsync ? 'async ' : ''}run(${argName})`;
  const retLine = returns === 'void'
    ? ''
    : returns === 'value'
      ? `return ${args === 'one' ? 'x ??' : ''} 1;`
      : `return new Promise(resolve => setTimeout(() => resolve(${args === 'one' ? 'x ??' : ''} 1), 0));`;

  return `import { Component, h, Method, State } from '@stencil/core';

@Component({ tag: '${tag}', shadow: true })
export class ${className} {
  @State() value = 0;

  ${methodSig} {
    ${retLine}
  }

  async componentDidLoad() {
    const host = this.host as any;
    const result = await (host as any).run(${args === 'one' ? '1' : ''});
    if (typeof result === 'number') this.value = result; else this.value++;
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

  render() {
    return (
      <div>
        <p>Options: returns=${returns} async=${isAsync} args=${args}</p>
        <p>Counter: <span id="counter">{this.value}</span></p>
      </div>
    );
  }
}
`;
}

// Decorator-specific: Generate all valid permutations 
function getAllPermutations() {
  const permutations = [];
  const asyncOptions = ['true', 'false'];
  const argsOptions = ['none', 'one'];
  const returnsOptions = ['promise', 'value', 'void'];
  
  for (const returns of returnsOptions) {
    for (const asyncOpt of asyncOptions) {
      for (const args of argsOptions) {
        // Check if this combination is valid (async=false only allowed with promise returns)
        const isAllowed = asyncOpt === 'true' || returns === 'promise';
        if (isAllowed) {
          permutations.push({ options: [returns, asyncOpt === 'true' ? '✓' : '✗', args] });
        }
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
    decorator: 'method',
    
    // Decorator-specific functions
    buildNameSegments,
    buildComponentSource: buildMethodComponentSource,
    buildComponentsIndex,
    getAllPermutations,
    
    // Optional overrides
    getGroupDir: (options) => options[0], // Group by returns type (first option)
    logLabel: '@Method (generate+verify)'
  });
}

main();

// Local helper: compute components.json structure from files on disk
function buildComponentsIndex() {
  const methodRoot = OUTPUT_DIR;
  const searchDirs = [methodRoot];

  // Find all .tsx files
  const allFiles = [];
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    const stack = [dir];
    while (stack.length) {
      const current = stack.pop();
      const entries = fs.readdirSync(current, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(current, entry.name);
        if (entry.isDirectory()) {
          stack.push(fullPath);
        } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
          allFiles.push(fullPath);
        }
      }
    }
  }

  // Extract options from file paths
  const coveredPermutations = allFiles.map(filePath => {
    const rel = path.relative(methodRoot, filePath).replace(/\\/g, '/');
    const parts = rel.split('/');
    const returns = parts[0] || 'void';
    const base = path.basename(rel, path.extname(rel));
    
    let async = '✗';
    if (/-async-false-/.test(base)) async = '✗';
    else if (/-async-true-/.test(base)) async = '✓';
    
    const args = /-args-one$/.test(base) ? 'one' : 'none';

    return {
      options: [returns, async, args],
      count: 1,
      files: [rel],
    };
  });

  // Generate all possible permutations
  const allPermutations = [];
  for (const returns of ['void', 'value', 'promise']) {
    for (const async of ['✓', '✗']) {
      for (const args of ['none', 'one']) {
        // Only allow permutations where method returns a Promise
        if (async === '✓' || returns === 'promise') {
          allPermutations.push([returns, async, args]);
        }
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