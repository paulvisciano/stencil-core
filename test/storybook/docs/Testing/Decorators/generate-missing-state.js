import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'State/state-coverage-data.json');
const RULES_PATH = path.resolve(__dirname, 'State/state-rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../test/wdio/state-new/matrix');

function toPascalCase(tag) {
  return tag
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function buildNameSegments(options, rules) {
  const include = rules.emit?.naming?.includeOptions || ['type','hasDefault'];
  const segs = [rules.emit?.naming?.prefix || 'state'];
  const optMap = {
    type: options[0],
    hasDefault: options[1],
  };
  for (const opt of include) {
    const v = optMap[opt];
    if (v === undefined) continue;
    if (opt === 'hasDefault') {
      segs.push(v === 'true' ? 'default' : 'no-default');
    } else {
      segs.push(String(v));
    }
  }
  return segs;
}

function initializerFor(type, hasDefault) {
  if (hasDefault === 'false') return undefined;
  switch (type) {
    case 'string': return "'initial'";
    case 'number': return '0';
    case 'boolean': return 'false';
    case 'array': return '[]';
    case 'object': return '{}';
    case 'any': return "'any'";
    default: return undefined;
  }
}

function renderValue(type, varName) {
  switch (type) {
    case 'string': return `{${varName}}`;
    case 'number': return `{${varName}}`;
    case 'boolean': return `{${varName} ? 'true' : 'false'}`;
    case 'array': return `{JSON.stringify(${varName})}`;
    case 'object': return `{JSON.stringify(${varName})}`;
    case 'any': return `{String(${varName})}`;
  }
}

function changeExpr(type, varName) {
  switch (type) {
    case 'string': return `${varName} = 'changed'`;
    case 'number': return `${varName} = ${varName} + 1`;
    case 'boolean': return `${varName} = !${varName}`;
    case 'array': return `${varName} = [...${varName}, 'x']`;
    case 'object': return `${varName} = { ...${varName}, x: true }`;
    case 'any': return `${varName} = 'updated'`;
  }
}

function buildStateComponentSource(options, tag) {
  const [type, hasDefault] = options; // type, 'true'|'false'
  const className = toPascalCase(tag);
  const varName = 'val';
  const tsType = type === 'any' ? 'any' : type === 'array' ? 'any[]' : type;
  const init = initializerFor(type, hasDefault);
  const initLine = init ? ` = ${init}` : '';

  return `import { Component, h, State } from '@stencil/core';

@Component({
  tag: '${tag}',
  shadow: true,
})
export class ${className} {
  @State() ${varName}${tsType ? `: ${tsType}` : ''}${initLine};

  render() {
    return (
      <div>
        <p>Type: ${type} | Default: ${hasDefault}</p>
        <p>Value: ${renderValue(type, `this.${varName}`)}</p>
        <button onClick={() => (${changeExpr(type, `this.${varName}`)})}>Change</button>
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
    if (!Array.isArray(options) || options.length !== 2) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    // Group by mode (type) within matrix
    const groupDir = options[0];
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, fileName);
    if (fs.existsSync(filePath)) continue;

    const tag = baseName;
    const src = buildStateComponentSource(options, tag);

    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);
}

main();
