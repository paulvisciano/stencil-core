import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { writeJson } from '../_shared/verify-matrix-core.js';
import { generateComponentsMain, toPascalCase } from '../_shared/generate-components-core.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'data/components.json');
const RULES_PATH = path.resolve(__dirname, 'data/rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/listen/components');

// toPascalCase now imported from shared core

function buildNameSegments(options, rules) {
  const include = rules.emit?.naming?.includeOptions || ['target','event','capture','passive'];
  const segs = [rules.emit?.naming?.prefix || 'listen'];
  const optMap = { target: options[0], event: options[1], capture: options[2], passive: options[3] };
  for (const opt of include) {
    const v = optMap[opt];
    if (v === undefined) continue;
    if (opt === 'capture' || opt === 'passive') segs.push(v === '✓' ? opt : `${opt}-false`);
    else segs.push(String(v));
  }
  return segs;
}

function buildListenComponentSource(options, tag) {
  const [target, event, captureSym, passiveSym] = options;
  const capture = captureSym === '✓';
  const passive = passiveSym === '✓';
  const className = toPascalCase(tag);
  // Use a unique event name per component to avoid cross-component interference
  const uniqueEvent = `${event}-${tag}`;
  const listenOpts = [];
  listenOpts.push(`'${uniqueEvent}'`);
  if (target && target !== 'host') listenOpts.push(`{ target: '${target}', capture: ${capture}, passive: ${passive} }`);
  else listenOpts.push(`{ capture: ${capture}, passive: ${passive} }`);
  return `import { Component, Element, h, Listen, State } from '@stencil/core';

@Component({ tag: '${tag}', shadow: true })
export class ${className} {
  @Element() el!: HTMLElement;
  @State() counter = 0;

  @Listen(${listenOpts.join(', ')})
  onEv() {
    this.counter++;
  }

  async componentDidLoad() {
    // Wait for next tick to ensure listener is attached
    await new Promise(resolve => setTimeout(resolve, 0));
    const win = window;
    const doc = document;
    const body = document.body;
    // fire event on the appropriate target with unique event name
    const ev = new Event('${uniqueEvent}', { bubbles: true, cancelable: true, composed: true });
    const target: string = '${target}';
    if (target === 'window') {
      win.dispatchEvent(ev);
    } else if (target === 'document') {
      doc.dispatchEvent(ev);
    } else if (target === 'body') {
      body.dispatchEvent(ev);
    } else {
      // host target - dispatch on the component element
      this.el.dispatchEvent(ev);
    }
  }

  render() {
    return (
      <div>
        <p>Options: target=${target} event=${event} capture=${capture} passive=${passive}</p>
        <p>Counter: <span id="counter">{this.counter}</span></p>
      </div>
    );
  }
}
`;
}

// Decorator-specific: Generate all possible permutations
function getAllPermutations() {
  const TARGET_OPTIONS = ['window', 'document', 'body', 'host'];
  const VALID_EVENTS = {
    window: ['click', 'keydown'],
    document: ['click', 'keydown', 'input'],
    body: ['click', 'keydown', 'input'],
    host: ['click', 'keydown', 'input'],
  };
  const captureOptions = ['✓', '✗'];
  const passiveOptions = ['✓', '✗'];
  
  const permutations = [];
  for (const target of TARGET_OPTIONS) {
    for (const event of VALID_EVENTS[target]) {
      for (const capture of captureOptions) {
        for (const passive of passiveOptions) {
          permutations.push({ options: [target, event, capture, passive] });
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
    decorator: 'listen',
    
    // Decorator-specific functions
    buildNameSegments,
    buildComponentSource: buildListenComponentSource,
    buildComponentsIndex,
    getAllPermutations,
    
    // Optional overrides
    getGroupDir: (options) => String(options[0]), // Group by target (first option)
    logLabel: '@Listen (generate+verify)'
  });
}

main();

// Local helper: compute components.json structure from files on disk (Listen)
function buildComponentsIndex() {
  const listenRoot = OUTPUT_DIR;
  const TARGET_OPTIONS = ['window', 'document', 'body', 'host'];
  const VALID_EVENTS = {
    window: ['click', 'keydown'],
    document: ['click', 'keydown', 'input'],
    body: ['click', 'keydown', 'input'],
    host: ['click', 'keydown', 'input'],
  };

  function getAllPermutationKeys() {
    const allPermutations = [];
    for (const target of TARGET_OPTIONS) {
      for (const event of VALID_EVENTS[target]) {
        for (const capture of ['✓', '✗']) {
          for (const passive of ['✓', '✗']) {
            allPermutations.push([target, event, capture, passive].join('|'));
          }
        }
      }
    }
    return allPermutations;
  }

  function normalizeValue(val, opt) {
    if (opt === 'capture' || opt === 'passive') return val ? '✓' : '✗';
    return val;
  }

  function extractListenOptions(file) {
    const content = fs.readFileSync(file, 'utf8');
    const listenRegex = /@Listen\s*\(([^)]*)\)/g;
    let match;
    const results = [];
    while ((match = listenRegex.exec(content)) !== null) {
      const optionsStr = match[1] || '';
      let target = 'host';
      const targetMatch = optionsStr.match(/target:\s*['"]([^'\"]+)['"]/);
      if (targetMatch) target = targetMatch[1];
      let event = '';
      const eventMatch = optionsStr.match(/['"]([^'\"]+)['"]/);
      if (eventMatch) event = eventMatch[1];
      let capture = false;
      const captureMatch = optionsStr.match(/capture:\s*(true|false)/);
      if (captureMatch) capture = captureMatch[1] === 'true';
      let passive = false;
      const passiveMatch = optionsStr.match(/passive:\s*(true|false)/);
      if (passiveMatch) passive = passiveMatch[1] === 'true';
      results.push({ target, event, capture, passive });
    }
    return results;
  }

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

  const allFound = [];
  const files = findFiles(listenRoot);
  files.forEach(file => {
    const listens = extractListenOptions(file);
    if (listens.length > 0) {
      const rel = path.relative(listenRoot, file);
      listens.forEach(l => allFound.push({ ...l, file: rel }));
    }
  });

  const permutationMap = {};
  const filesForKey = new Map();
  allFound.forEach(l => {
    const keyArr = [l.target, l.event, normalizeValue(l.capture, 'capture'), normalizeValue(l.passive, 'passive')];
    const key = keyArr.join('|');
    if (!permutationMap[key]) permutationMap[key] = { count: 0 };
    permutationMap[key].count++;
    if (!filesForKey.has(key)) filesForKey.set(key, new Set());
    filesForKey.get(key).add(l.file);
  });

  const uniquePermutations = Object.entries(permutationMap).map(([key, val]) => {
    const opts = key.split('|');
    return { options: opts, count: val.count, files: Array.from(filesForKey.get(key) || []) };
  });

  const allKeys = getAllPermutationKeys();
  const coveredKeys = new Set(Object.keys(permutationMap));
  const missingKeys = allKeys.filter(key => !coveredKeys.has(key));

  const totalPermutations = allKeys.length;
  const coveredCount = uniquePermutations.length;

  const coverageData = {
    coverage: {
      covered: coveredCount,
      total: totalPermutations,
      percent: totalPermutations > 0 ? ((coveredCount / totalPermutations) * 100).toFixed(1) : '0.0',
    },
    coveredPermutations: uniquePermutations,
    missingPermutations: missingKeys.map(p => ({ options: p.split('|') })),
  };

  writeJson(DATA_PATH, coverageData);
  return coverageData;
}
