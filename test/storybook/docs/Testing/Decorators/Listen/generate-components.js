import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'coverage-data.json');
const RULES_PATH = path.resolve(__dirname, 'rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/listen/matrix');

function toPascalCase(tag) {
  return tag
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

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
  const listenOpts = [];
  listenOpts.push(`'${event}'`);
  if (target && target !== 'host') listenOpts.push(`{ target: '${target}', capture: ${capture}, passive: ${passive} }`);
  else listenOpts.push(`{ capture: ${capture}, passive: ${passive} }`);
  return `import { Component, h, Listen, State } from '@stencil/core';

@Component({ tag: '${tag}', shadow: true })
export class ${className} {
  @State() counter = 0;

  @Listen(${listenOpts.join(', ')})
  onEv() {
    this.counter++;
  }

  componentDidLoad() {
    const el = this.host as HTMLElement;
    const win = window;
    const doc = document;
    const body = document.body;
    // fire event on the appropriate target
    const ev = new Event('${event}', { bubbles: true, cancelable: true, composed: true });
    if ('${target}' === 'window') win.dispatchEvent(ev);
    else if ('${target}' === 'document') doc.dispatchEvent(ev);
    else if ('${target}' === 'body') body.dispatchEvent(ev);
    else el.dispatchEvent(ev);
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

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

function main() {
  if (!fs.existsSync(DATA_PATH)) {
    console.error(`Missing data file: ${DATA_PATH}`);
    process.exit(1);
  }
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  const missing = data.missingPermutations || [];

  if (!fs.existsSync(OUTPUT_DIR)) fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  let created = 0;
  for (const entry of missing) {
    const options = entry.options;
    if (!Array.isArray(options) || options.length !== 4) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    const groupDir = options[0];
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    const filePath = path.join(targetDir, fileName);
    if (fs.existsSync(filePath)) continue;

    const tag = baseName;
    const src = buildListenComponentSource(options, tag);
    fs.writeFileSync(filePath, src);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);
}

main();
