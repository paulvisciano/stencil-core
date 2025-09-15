import fs from 'fs';
import path from 'path';
import { globSync } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const repoRoot = path.resolve(__dirname, '../../../../../..');
const legacyDir = path.resolve(repoRoot, 'test/wdio/state');
const newDir = path.resolve(repoRoot, 'test/wdio/state/matrix');

function parseLegacy(filePath) {
  const name = path.basename(filePath);
  if (name === 'cmp.test.tsx') return null;
  // Examples:
  // state-string-no-default-cmp.tsx
  // state-string-default-cmp.tsx
  // state-array-cmp.tsx (no-default implied)
  // state-any-cmp.tsx
  const m = name.match(/^state-([^.-]+)-(.*)$/);
  let type = null;
  let hasDefault = false;
  if (m) {
    type = m[1];
    if (name.includes('-no-default')) hasDefault = false;
    else if (name.includes('-default')) hasDefault = true;
    else hasDefault = false;
  }
  if (!type) return null;
  return { key: `${type},${hasDefault}`, type, hasDefault, path: filePath, rel: path.relative(legacyDir, filePath) };
}

function parseNew(filePath) {
  const rel = path.relative(newDir, filePath);
  // rel like: string/state-string-default.tsx
  const segs = rel.split(path.sep);
  const typeFolder = segs[0];
  const base = path.basename(rel, '.tsx');
  const hasDefault = base.includes('-no-default') ? false : base.includes('-default') ? true : false;
  const type = typeFolder;
  return { key: `${type},${hasDefault}`, type, hasDefault, path: filePath, rel };
}

function collectLegacy() {
  const files = globSync(path.join(legacyDir, '**/*.tsx'));
  const out = new Map();
  files.forEach(f => {
    const p = parseLegacy(f);
    if (!p) return;
    out.set(p.key, p);
  });
  return out;
}

function collectNew() {
  const files = globSync(path.join(newDir, '**/*.tsx'));
  const out = new Map();
  files.forEach(f => {
    const p = parseNew(f);
    out.set(p.key, p);
  });
  return out;
}

function main() {
  if (!fs.existsSync(legacyDir)) {
    console.error(`Legacy dir missing: ${legacyDir}`);
    process.exit(1);
  }
  if (!fs.existsSync(newDir)) {
    console.error(`New dir missing: ${newDir}`);
    process.exit(1);
  }

  const legacy = collectLegacy();
  const modern = collectNew();

  const types = ['string','number','boolean','array','object','any'];
  const bools = [true, false];
  const summary = [];
  const missingLegacy = [];
  const missingNew = [];

  for (const t of types) {
    for (const b of bools) {
      const key = `${t},${b}`;
      const l = legacy.get(key);
      const n = modern.get(key);
      summary.push({ type: t, hasDefault: b, legacy: l?.rel || null, modern: n?.rel || null });
      if (!l) missingLegacy.push(key);
      if (!n) missingNew.push(key);
    }
  }

  console.log('Legacy vs New @State permutations');
  console.table(summary.map(r => ({ type: r.type, hasDefault: r.hasDefault, legacy: r.legacy ? `state/${r.legacy}` : '-', modern: r.modern ? `state/matrix/${r.modern}` : '-' })));

  if (missingLegacy.length === 0 && missingNew.length === 0) {
    console.log('All 12 permutations present in both legacy and new matrices.');
  } else {
    if (missingLegacy.length) console.warn('Missing in legacy:', missingLegacy);
    if (missingNew.length) console.warn('Missing in new:', missingNew);
  }
}

main();
