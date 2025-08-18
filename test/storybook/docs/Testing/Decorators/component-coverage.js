// Combined scan-components & update-matrix script
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIRS = [
  path.resolve(__dirname, '../../../../../test/end-to-end'),
  path.resolve(__dirname, '../../../../../test/wdio'),
];
const OPTIONS = ['shadow', 'scoped', 'assetsDirs', 'formAssociated', 'styleUrl', 'styleUrls', 'styles'];
const mdxPath = path.resolve(__dirname, '@Component.mdx');

function findFiles(dir, ext = '.tsx', excludeDirs = ['node_modules', '.cache']) {
  let results = [];
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

function extractComponentOptions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/@Component\s*\(\s*\{([\s\S]*?)\}\s*\)/m);
  if (!match) return null;
  const options = {};
  OPTIONS.forEach(opt => {
    // Allow optional spaces around colon
    const optMatch = match[1].match(new RegExp(`${opt}\s*:\s*([^,\n]+)`));
    if (!optMatch) {
      // Try with extra spaces before/after colon
      const optMatchAlt = match[1].match(new RegExp(`${opt}\s*\s*:\s*\s*([^,\n]+)`));
      if (optMatchAlt) {
        options[opt] = optMatchAlt[1].replace(/['"`]/g, '').trim();
        return;
      }
    }
    if (optMatch) {
      options[opt] = optMatch[1].replace(/['"`]/g, '').trim();
    }
  });
  return options;
}

function normalizeValue(val, opt) {
  if (val === undefined) return '-';
  if (opt === 'shadow' || opt === 'scoped' || opt === 'formAssociated') {
    if (val === 'true' || val === true) return '✓';
    if (val === 'false' || val === false) return '✗';
    return '✓'; // treat any other value as set
  }
  // For string/array options
  return val !== undefined && val !== 'false' ? '✓' : '-';
}

function getTotalPermutations() {
  // For booleans: 3 states (true, false, unset), for string/array: 2 (set, unset)
  // shadow, scoped, formAssociated: 3 each
  // assetsDirs, styleUrl, styleUrls, styles: 2 each
  return 3 * 3 * 2 * 3 * 2 * 2 * 2; // = 1296
}

function getCoverageBlock(covered, total) {
  const percent = ((covered / total) * 100).toFixed(1);
  return `<div><strong>Permutation Coverage:</strong> ${covered}/${total} permutations covered (<strong>${percent}%</strong>)</div>`;
}

function main() {
  // Scan for permutations
  const results = [];
  TEST_DIRS.forEach(dir => {
    const files = findFiles(dir);
    files.forEach(file => {
      const opts = extractComponentOptions(file);
      if (opts) {
        results.push({ file, ...opts });
      }
    });
  });

  // Group by unique permutation
  const permutationMap = {};
  results.forEach(entry => {
    const key = OPTIONS.map(opt => normalizeValue(entry[opt], opt)).join('|');
    if (!permutationMap[key]) permutationMap[key] = { count: 0 };
    permutationMap[key].count++;
  });

  const uniquePermutations = Object.entries(permutationMap).map(([key, val]) => {
    const opts = key.split('|');
    return { options: opts, count: val.count };
  });

  // Generate table rows for MDX
  let rows = '';
  uniquePermutations.forEach((entry, idx) => {
    rows += '    <tr>\n';
    rows += `      <td>${idx + 1}</td>\n`;
    entry.options.forEach(val => {
      rows += `      <td>${val}</td>\n`;
    });
    rows += `      <td>${entry.count}</td>\n`;
    rows += '    </tr>\n';
  });

  // Calculate coverage
  const totalPermutations = getTotalPermutations();
  const covered = uniquePermutations.length;
  const coverageBlock = getCoverageBlock(covered, totalPermutations);

  // Read MDX and replace table body and coverage block
  let mdx = fs.readFileSync(mdxPath, 'utf8');
  mdx = mdx.replace(/<div style=\"background:#ffeeba[\s\S]*?<\/div>/m, ''); // Remove old block if present
  mdx = mdx.replace(/(<table>)/m, coverageBlock + '\n$1');
  mdx = mdx.replace(/(<tbody>[\s\S]*?<\/tbody>)/m, `<tbody>\n${rows}  </tbody>`);
  fs.writeFileSync(mdxPath, mdx);
  console.log('Component.mdx matrix and coverage updated.');
}

main();
