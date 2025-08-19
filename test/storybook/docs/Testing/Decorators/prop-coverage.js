import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TEST_DIRS = [
  path.resolve(__dirname, '../../../../../test/end-to-end'),
  path.resolve(__dirname, '../../../../../test/wdio'),
];
const PROP_TYPES = ['boolean', 'string', 'number', 'Set', 'Array', 'Object'];
const OPTIONS = ['type', 'reflect', 'mutable'];
const mdxPath = path.resolve(__dirname, '@Prop.mdx');
const jsonPath = path.resolve(__dirname, 'prop-coverage-data.json');

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

function extractPropOptions(file) {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const results = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Look for @Prop decorator
    if (line.startsWith('@Prop(')) {
      let propDecoratorLine = line;
      let propLine = '';
      
      // Handle multi-line @Prop declarations
      let j = i;
      while (j < lines.length && !propDecoratorLine.includes(')')) {
        j++;
        if (j < lines.length) {
          propDecoratorLine += ' ' + lines[j].trim();
        }
      }
      
      // Check if the property declaration is on the same line as the decorator
      const decoratorEndIndex = propDecoratorLine.indexOf(')');
      if (decoratorEndIndex !== -1 && propDecoratorLine.length > decoratorEndIndex + 1) {
        // Property is on the same line as the decorator
        propLine = propDecoratorLine.substring(decoratorEndIndex + 1).trim();
      } else {
        // Find the property declaration (next non-empty line after the decorator)
        j++;
        while (j < lines.length && lines[j].trim() === '') {
          j++;
        }
        if (j < lines.length) {
          propLine = lines[j].trim();
        }
      }
      
      // Extract decorator options
      const optionsMatch = propDecoratorLine.match(/@Prop\((.*?)\)/);
      const options = optionsMatch ? optionsMatch[1] : '';
      
      // Determine reflect and mutable
      // Only set to ✓ if explicitly set to true
      const reflectTrue = /reflect\s*:\s*true/.test(options);
      const mutableTrue = /mutable\s*:\s*true/.test(options);
      
      const reflect = reflectTrue ? '✓' : '✗';
      const mutable = mutableTrue ? '✓' : '✗';
      
      // Extract type from property declaration
      let normalizedType = 'Object';
      
      // Look for explicit type annotation
      const typeMatch = propLine.match(/:\s*([\w<>\[\]\s,|]+?)(?:\s*=|;)/);
      if (typeMatch) {
        const type = typeMatch[1].trim();
        if (type.toLowerCase().includes('set')) {
          normalizedType = 'Set';
        } else if (type.includes('[]') || type.toLowerCase().includes('array')) {
          normalizedType = 'Array';
        } else if (type.toLowerCase().includes('string')) {
          normalizedType = 'string';
        } else if (type.toLowerCase().includes('boolean')) {
          normalizedType = 'boolean';
        } else if (type.toLowerCase().includes('number')) {
          normalizedType = 'number';
        }
      } else {
        // Infer type from initializer
        const initMatch = propLine.match(/=\s*(.+);?$/);
        if (initMatch) {
          const init = initMatch[1].trim().replace(/;$/, '');
          if (init.startsWith("'") || init.startsWith('"') || init.startsWith('`')) {
            normalizedType = 'string';
          } else if (init === 'true' || init === 'false') {
            normalizedType = 'boolean';
          } else if (!isNaN(parseFloat(init))) {
            normalizedType = 'number';
          } else if (init.toLowerCase().startsWith('new set')) {
            normalizedType = 'Set';
          } else if (init.startsWith('[')) {
            normalizedType = 'Array';
          } else if (init.startsWith('{')) {
            normalizedType = 'Object';
          }
        }
      }
      
      results.push({ type: normalizedType, reflect, mutable });
    }
  }
  
  return results;
}

function getAllPermutationKeys() {
  const allPermutations = [];
  for (const type of PROP_TYPES) {
    for (const reflect of ['✓', '✗']) {
      for (const mutable of ['✓', '✗']) {
        allPermutations.push(`${type}|${reflect}|${mutable}`);
      }
    }
  }
  return allPermutations;
}

function getCoverageData(coveredCount, totalCount, coveredPermutations, missingPermutations) {
  const percent = totalCount > 0 ? ((coveredCount / totalCount) * 100).toFixed(1) : '0.0';
  return {
    coverage: {
      covered: coveredCount,
      total: totalCount,
      percent: percent,
    },
    coveredPermutations: coveredPermutations.map(p => ({ options: p.options, count: p.count })),
    missingPermutations: missingPermutations.map(p => ({ options: p.split('|') })),
  };
}

function main() {
  const allFoundProps = [];
  TEST_DIRS.forEach(dir => {
    const files = findFiles(dir);
    files.forEach(file => {
      const props = extractPropOptions(file);
      if (props.length > 0) {
        allFoundProps.push(...props);
      }
    });
  });

  const permutationMap = {};
  allFoundProps.forEach(prop => {
    const key = `${prop.type}|${prop.reflect}|${prop.mutable}`;
    if (!permutationMap[key]) {
      permutationMap[key] = { count: 0 };
    }
    permutationMap[key].count++;
  });

  const uniquePermutations = Object.entries(permutationMap).map(([key, val]) => {
    const opts = key.split('|');
    return { options: opts, count: val.count };
  });

  const allKeys = getAllPermutationKeys();
  const coveredKeys = new Set(Object.keys(permutationMap));
  const missingKeys = allKeys.filter(key => !coveredKeys.has(key));

  const totalPermutations = allKeys.length;
  const coveredCount = uniquePermutations.length;

  const jsonData = getCoverageData(coveredCount, totalPermutations, uniquePermutations, missingKeys);

  fs.writeFileSync(jsonPath, JSON.stringify(jsonData, null, 2));

  console.log(`Coverage data written to ${jsonPath}`);
}

main();
