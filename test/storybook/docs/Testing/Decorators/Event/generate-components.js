import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'coverage-data.json');
const RULES_PATH = path.resolve(__dirname, 'rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/event/matrix');

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
  return `import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({ tag: '${tag}', shadow: true })
export class ${className} {
  @Event({ bubbles: ${bubbles}, cancelable: ${cancelable}, composed: ${composed} }) change!: EventEmitter<string>;

  render() {
    return (
      <button onClick={() => this.change.emit('ping')}>
        Emit: bubbles=${bubbles} cancelable=${cancelable} composed=${composed}
      </button>
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
    if (!Array.isArray(options) || options.length !== 3) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    const groupDir = options[0] === '✓' ? 'bubbles' : 'no-bubbles';
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    const filePath = path.join(targetDir, fileName);
    if (fs.existsSync(filePath)) continue;

    const tag = baseName;
    const src = buildEventComponentSource(options, tag);
    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);
}

main();
