import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'coverage-data.json');
const RULES_PATH = path.resolve(__dirname, 'rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../test/wdio/method/matrix');

function toPascalCase(tag) {
  return tag.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

function buildNameSegments(options, rules) {
  const include = rules.emit?.naming?.includeOptions || ['returns','async','args'];
  const segs = [rules.emit?.naming?.prefix || 'method'];
  const optMap = { returns: options[0], async: options[1], args: options[2] };
  for (const opt of include) {
    const v = optMap[opt];
    if (v === undefined) continue;
    if (opt === 'async') segs.push(v === '✓' ? 'async' : 'async-false');
    else segs.push(String(v));
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
      ? 'return x ?? 1;'
      : 'return new Promise(resolve => setTimeout(() => resolve(x ?? 1), 0));';

  return `import { Component, h, Method, State } from '@stencil/core';

@Component({ tag: '${tag}', shadow: true })
export class ${className} {
  @State() value = 0;

  ${methodSig} {
    ${retLine}
  }

  async componentDidLoad() {
    const host = this.host as any;
    const result = await (host as any).run(${args === 'one' ? '2' : ''});
    if (typeof result === 'number') this.value = result; else this.value++;
  }

  private get host() { return (this as any).el || (this as any).$host$ || this as any; }

  render() {
    return (
      <div>
        <p>Options: returns=${returns} async=${isAsync} args=${args}</p>
        <p>Counter: <span id=\"counter\">{this.value}</span></p>
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
    if (!Array.isArray(options) || options.length !== 3) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    const groupDir = options[0];
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    const filePath = path.join(targetDir, fileName);
    if (fs.existsSync(filePath)) continue;

    const tag = baseName;
    const src = buildMethodComponentSource(options, tag);
    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);
}

main();
