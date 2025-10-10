import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIR = path.resolve(__dirname, '../../../../../../test/wdio/method/matrix');
const OPTIONS = ['returns','async','args'];
const jsonPath = path.resolve(__dirname, 'coverage-data.json');

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

function extractFromPath(absPath) {
  const rel = path.relative(TEST_DIR, absPath).replace(/\\/g, '/');
  // expected: <returns>/<file>
  const parts = rel.split('/');
  const returns = parts[0] || 'void';
  const base = path.basename(rel, path.extname(rel));
  // filename: method-<returns>-async(-false)?-<args>
  let async = '✗';
  if (/-async-false-/.test(base)) async = '✗';
  else if (/-async-/.test(base)) async = '✓';
  const args = /-one$/.test(base) ? 'one' : 'none';
  return { returns, async, args, file: rel };
}

function getAllPermutationKeys() {
  const all = [];
  for (const ret of ['void','value','promise']) {
    for (const as of ['✓','✗']) {
      for (const arg of ['none','one']) {
        all.push([ret, as, arg].join('|'));
      }
    }
  }
  return all;
}

function main() {
  const files = findFiles(TEST_DIR);
  const allFound = files.map(extractFromPath);

  const map = {};
  const filesForKey = new Map();
  allFound.forEach(o => {
    const key = [o.returns, o.async, o.args].join('|');
    if (!map[key]) map[key] = { count: 0 };
    map[key].count++;
    if (!filesForKey.has(key)) filesForKey.set(key, new Set());
    filesForKey.get(key).add(o.file);
  });

  const covered = Object.entries(map).map(([key, val]) => ({ options: key.split('|'), count: val.count, files: Array.from(filesForKey.get(key) || []) }));
  const allKeys = getAllPermutationKeys();
  const coveredKeys = new Set(Object.keys(map));
  const missing = allKeys.filter(k => !coveredKeys.has(k));

  const data = {
    coverage: { covered: covered.length, total: allKeys.length, percent: allKeys.length ? ((covered.length / allKeys.length) * 100).toFixed(1) : '0.0' },
    coveredPermutations: covered,
    missingPermutations: missing.map(k => ({ options: k.split('|') }))
  };

  fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
  console.log(`Method coverage data written to ${jsonPath}`);
}

main();
