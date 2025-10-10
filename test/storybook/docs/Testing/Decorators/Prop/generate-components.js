import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'coverage-data.json');
const RULES_PATH = path.resolve(__dirname, 'rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/prop/matrix');

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
    // encode booleans/symbols as words
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
  if (!fs.existsSync(DATA_PATH)) {
    console.error(`Missing data file: ${DATA_PATH}`);
    process.exit(1);
  }
  if (!fs.existsSync(RULES_PATH)) {
    console.error(`Missing rules file: ${RULES_PATH}`);
    process.exit(1);
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));
  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  const missing = data.missingPermutations || [];

  let created = 0;
  for (const entry of missing) {
    const options = entry.options;
    if (!Array.isArray(options) || options.length !== 3) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    // group by type
    const groupDir = String(options[0]);
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

    const filePath = path.join(targetDir, fileName);
    if (fs.existsSync(filePath)) continue;

    const tag = baseName;
    const src = buildPropComponentSource(options, tag);
    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);
}

main();
