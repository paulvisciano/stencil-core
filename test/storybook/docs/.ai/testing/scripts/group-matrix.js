const fs = require('fs');
const path = require('path');

const MATRIX_DIR = path.resolve(process.cwd(), '../../../../wdio/component-decorator/matrix');

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function classify(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const hasShadow = /@Component\s*\(\s*\{[\s\S]*?shadow\s*:\s*true/.test(src);
  const hasScoped = /@Component\s*\(\s*\{[\s\S]*?scoped\s*:\s*true/.test(src);
  if (hasShadow) return 'shadow';
  if (hasScoped) return 'scoped';
  return 'light';
}

function main() {
  ensureDir(MATRIX_DIR);
  const shadowDir = path.join(MATRIX_DIR, 'shadow');
  const scopedDir = path.join(MATRIX_DIR, 'scoped');
  const lightDir = path.join(MATRIX_DIR, 'light');
  ensureDir(shadowDir);
  ensureDir(scopedDir);
  ensureDir(lightDir);

  const entries = fs.readdirSync(MATRIX_DIR, { withFileTypes: true });
  let moved = 0;
  for (const ent of entries) {
    if (!ent.isFile()) continue;
    if (!ent.name.endsWith('.tsx')) continue;
    if (ent.name === 'cmp-base.tsx') continue;
    const from = path.join(MATRIX_DIR, ent.name);
    const group = classify(from);
    const to = path.join(MATRIX_DIR, group, ent.name);
    fs.renameSync(from, to);
    moved++;
  }
  console.log(`Grouped ${moved} components under shadow/, scoped/, light/`);
}

main();
