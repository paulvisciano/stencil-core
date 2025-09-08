// filepath: /Users/paul.visciano/repos/core/test/storybook/docs/Testing/Decorators/generate-missing-components.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_PATH = path.resolve(__dirname, 'component-coverage-data.json');
const OUTPUT_DIR = path.resolve(__dirname, '../../../../../test/wdio/component-decorator/matrix');

/**
 * OPTIONS order reference used by component-coverage.js
 * ['shadow','scoped','assetsDirs','formAssociated','styleUrl','styleUrls','styles']
 */

function toBoolSymbol(val) {
  return val === '✓' ? 'true' : val === '✗' ? 'false' : undefined; // '-' => undefined/omit
}

function segmentFrom(option, value) {
  if (value === '✓') return option.toLowerCase();
  if (value === '✗') return `${option.toLowerCase()}-false`;
  return null; // omit for '-'
}

function buildNameSegments(options) {
  const [shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles] = options;
  const segs = ['cmp'];
  const s1 = segmentFrom('shadow', shadow);
  if (s1) segs.push(s1);
  const s2 = segmentFrom('scoped', scoped);
  if (s2) segs.push(s2);
  if (assetsDirs === '✓') segs.push('assetsdirs');
  const fa = segmentFrom('formassociated', formAssociated);
  if (fa) segs.push(fa);
  if (styleUrl === '✓') segs.push('styleurl');
  if (styleUrls === '✓') segs.push('styleurls');
  if (styles === '✓') segs.push('styles');
  return segs;
}

function toPascalCase(tag) {
  return tag
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

function buildComponentSource(options, tag) {
  const [shadow, scoped, assetsDirs, formAssociated, styleUrl, styleUrls, styles] = options;

  const props = [];
  props.push(`tag: '${tag}'`);
  if (shadow !== '-') props.push(`shadow: ${toBoolSymbol(shadow)}`);
  if (scoped !== '-') props.push(`scoped: ${toBoolSymbol(scoped)}`);
  if (assetsDirs === '✓') props.push(`assetsDirs: ['assets']`);
  if (formAssociated !== '-') props.push(`formAssociated: ${toBoolSymbol(formAssociated)}`);
  if (styleUrl === '✓') props.push(`styleUrl: 'matrix-gen.css'`);
  if (styleUrls === '✓') props.push(`styleUrls: ['matrix-gen.css']`);
  if (styles === '✓') props.push(`styles: ':host{display:block}'`);

  const className = toPascalCase(tag);
  const permutationStr = options.join(' | ');

  return `import { Component } from '@stencil/core';

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

function main() {
  if (!fs.existsSync(DATA_PATH)) {
    console.error(`Missing data file: ${DATA_PATH}`);
    process.exit(1);
  }
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const data = JSON.parse(fs.readFileSync(DATA_PATH, 'utf8'));
  const missing = data.missingPermutations || [];

  let created = 0;
  for (const entry of missing) {
    const options = entry.options;
    if (!Array.isArray(options) || options.length !== 7) continue;

    const nameSegs = buildNameSegments(options);
    const baseName = nameSegs.join('-');
    const fileName = `${baseName}.tsx`;
    const filePath = path.join(OUTPUT_DIR, fileName);

    if (fs.existsSync(filePath)) {
      // Already exists (defensive), skip
      continue;
    }

    const tag = nameSegs.join('-');
    const src = buildComponentSource(options, tag);

    fs.writeFileSync(filePath, `// filepath: ${filePath}\n${src}`);
    created++;
  }

  console.log(`Generated ${created} components in ${OUTPUT_DIR}`);
}

main();
