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

  // Output as array of unique permutations with count
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

  // Read MDX and replace table body and header
  let mdx = fs.readFileSync(mdxPath, 'utf8');
  mdx = mdx.replace(/(<tbody>[\s\S]*?<\/tbody>)/m, `<tbody>\n${rows}  </tbody>`);
  mdx = mdx.replace(/(<thead>[\s\S]*?<\/thead>)/m, `<thead>\n    <tr>\n      <th>#</th>\n      <th>shadow</th>\n      <th>scoped</th>\n      <th>assetsDirs</th>\n      <th>formAssociated</th>\n      <th>styleUrl</th>\n      <th>styleUrls</th>\n      <th>styles</th>\n      <th>Number of Test Files</th>\n    </tr>\n  </thead>`);
  fs.writeFileSync(mdxPath, mdx);
  console.log('Component.mdx matrix updated.');
}

main();
