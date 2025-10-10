import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'coverage-data.json');
const RULES_PATH = path.resolve(__dirname, 'rules.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../wdio/component-decorator/matrix');

function toBoolSymbol(val) {
  return val === '✓' ? 'true' : val === '✗' ? 'false' : undefined;
}

function symbolToBool(sym) {
  if (sym === '✓') return true;
  if (sym === '✗' || sym === '-') return false;
  return false;
}

function segmentFrom(option, value) {
  if (value === '✓') return option.toLowerCase();
  if (value === '✗') return `${option.toLowerCase()}-false`;
  return null;
}

function buildNameSegments(options, rules) {
  const include = (rules.emit?.naming?.includeOptions) || ['shadow','scoped','assetsDirs','formAssociated','styleUrl','styleUrls','styles'];
  const label = (opt) => opt.toLowerCase();
  const segs = [(rules.emit?.naming?.prefix) || 'cmp'];
  const optMap = { shadow: options[0], scoped: options[1], assetsDirs: options[2], formAssociated: options[3], styleUrl: options[4], styleUrls: options[5], styles: options[6] };
  for (const opt of include) {
    const v = optMap[opt];
    if (v === undefined) continue;
    const seg = segmentFrom(label(opt), v);
    if (seg) segs.push(seg);
    else if (v === '✓' && (opt === 'assetsDirs' || opt === 'styles' || opt === 'styleUrl' || opt === 'styleUrls')) {
      segs.push(label(opt));
    }
  }
  return segs;
}

function toPascalCase(tag) {
  return tag.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
}

function buildComponentSource(options, tag, cssPrefix = '') {
  const [shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles] = options;
  const rules = JSON.parse(fs.readFileSync(RULES_PATH, 'utf8'));
  const props = [];
  props.push(`tag: '${tag}'`);
  if (shadow !== '-') props.push(`shadow: ${toBoolSymbol(shadow)}`);
  if (scoped !== '-') props.push(`scoped: ${toBoolSymbol(scoped)}`);
  if (assetsDirs === '✓') props.push(`assetsDirs: ['assets']`);
  if (formAssociated !== '-') props.push(`formAssociated: ${toBoolSymbol(formAssociated)}`);
  if (styleUrl === '✓') props.push(`styleUrl: '${cssPrefix}${rules.emit.assets.styleUrl}'`);
  if (styleUrls === '✓') props.push(`styleUrls: ['${cssPrefix}${rules.emit.assets.styleUrls[0]}', '${cssPrefix}${rules.emit.assets.styleUrls[1]}']`);
  if (styles === '✓') props.push(`styles: ':host{display:block}'`);
  const className = toPascalCase(tag);
  const permutationStr = options.join(' | ');
  return `import { Component, h } from '@stencil/core';

@Component({
  ${props.join(',\n  ')}
})
export class ${className} {
  render() {
    return <div>Permutation: ${permutationStr}</div>;
  }
}
`;
}

function getGroupDirForOptions(options, rules) {
  const [shadow, scoped] = options;
  const bools = { shadow: symbolToBool(shadow), scoped: symbolToBool(scoped) };
  const modes = rules.modes || [];
  for (const m of modes) {
    const when = m.when || {};
    let ok = true;
    for (const k of Object.keys(when)) {
      const expect = when[k];
      const got = bools[k];
      if (got !== expect) { ok = false; break; }
    }
    if (ok) return m.name;
  }
  if (shadow === '✓') return 'shadow';
  if (scoped === '✓') return 'scoped';
  return 'light';
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
    if (!Array.isArray(options) || options.length !== 7) continue;
    const nameSegs = buildNameSegments(options, rules);
    const baseName = nameSegs.join('-');
    const fileName = `${baseName}.tsx`;
    const groupDir = getGroupDirForOptions(options, rules);
    const targetDir = path.join(OUTPUT_DIR, groupDir);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });
    const filePath = path.join(targetDir, fileName);
    if (fs.existsSync(filePath)) continue;
    const tag = nameSegs.join('-');
    const cssPrefix = '../';
    const src = buildComponentSource(options, tag, cssPrefix);
    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);
}

main();
