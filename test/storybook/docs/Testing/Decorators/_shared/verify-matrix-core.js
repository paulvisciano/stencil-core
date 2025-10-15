import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

export function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

export function refreshCoverage(baseDir) {
  const script = path.resolve(baseDir, 'run-all-coverage.js');
  if (!fs.existsSync(script)) {
    throw new Error(`run-all-coverage.js not found at ${script}`);
  }
  execFileSync(process.execPath, [script], { cwd: baseDir, stdio: 'inherit' });
}

export function countTsxFiles(rootDir) {
  let count = 0;
  if (!fs.existsSync(rootDir)) {
    return count;
  }
  const stack = [rootDir];
  while (stack.length) {
    const current = stack.pop();
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        stack.push(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        count++;
      }
    }
  }
  return count;
}

export function coerceToComparable(actual, expected) {
  if (typeof expected === 'boolean') {
    if (actual === '✓' || actual === 'true' || actual === true) return true;
    if (actual === '✗' || actual === '-' || actual === 'false' || actual === false) return false;
    return Boolean(actual);
  }
  return actual;
}

export function expectedGroupName(optionValues, rules, optionOrder) {
  const modes = rules.modes || [];
  const actual = {};
  optionOrder.forEach((name, index) => {
    actual[name] = optionValues[index];
  });

  for (const mode of modes) {
    const when = mode.when || {};
    let matches = true;
    for (const key of Object.keys(when)) {
      const expected = when[key];
      const got = coerceToComparable(actual[key], expected);
      if (got !== expected) {
        matches = false;
        break;
      }
    }
    if (matches) {
      return mode.name;
    }
  }

  return modes[0]?.name || 'default';
}

export function validateExclusivity(optionValues, rules, optionOrder) {
  const groups = rules.exclusiveGroups || [];
  for (const group of groups) {
    let setCount = 0;
    for (const member of group.members || []) {
      const index = optionOrder.indexOf(member);
      if (index === -1) continue;
      const value = optionValues[index];
      const isSet = value === '✓' || value === 'true' || value === true;
      if (isSet) {
        setCount++;
      }
    }
    if (setCount > 1) return false;
    if (group.allowNone === false && setCount === 0) return false;
  }
  return true;
}

const GENERATOR_HINTS = {
  component: 'Component/generate-components',
  state: 'State/generate-components',
  prop: 'Prop/generate-components',
  event: 'Event/generate-components',
  listen: 'Listen/generate-components',
  method: 'Method/generate-components',
};

function ensureFileMatchesGroup(decorator, relativePath, expectedGroup) {
  if (decorator === 'component') {
    if (relativePath === 'matrix/cmp-base.tsx') {
      return true;
    }
    return relativePath.includes(`matrix/${expectedGroup}/`);
  }
  return relativePath.startsWith(`${expectedGroup}/`) || relativePath.includes(`/${expectedGroup}/`);
}

export function verifyCoverageConsistency({ decorator, rules, data, optionOrder, componentDir }) {
  const { covered, total } = data.coverage;
  if (covered !== total) {
    const hint = GENERATOR_HINTS[decorator] || 'generate-components';
    throw new Error(`Coverage drift for ${decorator}: covered (${covered}) !== total (${total}). Run ${hint} then refresh.`);
  }
  console.log(`Coverage OK for ${decorator}: ${covered}/${total}`);

  const tsxCount = countTsxFiles(componentDir);
  const adjustedTsxCount = decorator === 'component' && fs.existsSync(path.join(componentDir, 'cmp-base.tsx'))
    ? tsxCount - 1
    : tsxCount;
  if (adjustedTsxCount !== covered) {
    throw new Error(`File count drift for ${decorator}: ${adjustedTsxCount} .tsx files under ${componentDir} !== covered permutations ${covered}`);
  }
  console.log(`File count OK for ${decorator}: ${adjustedTsxCount}`);

  for (const permutation of data.coveredPermutations) {
    if (!validateExclusivity(permutation.options, rules, optionOrder)) {
      throw new Error(`Exclusivity violation in options (${decorator}): ${permutation.options.join(' | ')}`);
    }
    const expected = expectedGroupName(permutation.options, rules, optionOrder);
    for (const relativePath of permutation.files || []) {
      if (!ensureFileMatchesGroup(decorator, relativePath, expected)) {
        throw new Error(`Grouping mismatch (${decorator}): expected ${expected} for ${relativePath} (options: ${permutation.options.join(' | ')})`);
      }
    }
  }
  console.log(`Grouping and exclusivity OK for ${decorator}`);
}

const DEFAULT_OPTION_ORDERS = {
  component: ['shadow', 'scoped', 'assetsDirs', 'formAssociated', 'styleUrl', 'styleUrls', 'styles'],
  state: ['type', 'hasDefault'],
  prop: ['type', 'reflect', 'mutable'],
  event: ['bubbles', 'cancelable', 'composed'],
  listen: ['target', 'event', 'capture', 'passive'],
  method: ['returns', 'async', 'args'],
};

export function resolveOptionOrder(decorator, rules) {
  return rules.emit?.naming?.includeOptions || DEFAULT_OPTION_ORDERS[decorator] || ['type', 'hasDefault'];
}

function cloneRegex(regex) {
  return new RegExp(regex.source, regex.flags);
}

export function collectTestSources(rootDir) {
  if (!rootDir || !fs.existsSync(rootDir)) {
    return '';
  }
  let buffer = '';
  const entries = fs.readdirSync(rootDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(rootDir, entry.name);
    if (entry.isDirectory()) {
      buffer += collectTestSources(fullPath);
    } else if (entry.isFile() && /\.test\.(t|j)sx?$/i.test(entry.name)) {
      buffer += `\n${fs.readFileSync(fullPath, 'utf8')}`;
    }
  }
  return buffer;
}

export function buildManifestFromSources(testSources, tagRegex, { fallback = false } = {}) {
  const manifest = new Map();
  if (!testSources) {
    return manifest;
  }

  const itBlockRe = /it\(\s*([`'"])\s*([^\1]+?)\s*\1\s*,\s*async\s*\(\)\s*=>\s*\{([\s\S]*?)\}\s*\)/g;
  let match;
  while ((match = itBlockRe.exec(testSources)) !== null) {
    const title = match[2].trim();
    const body = match[3] || '';
    const tagRe = cloneRegex(tagRegex);
    let tagMatch;
    const tagsInTest = new Set();
    while ((tagMatch = tagRe.exec(body)) !== null) {
      const tagValue = tagMatch[2] ?? tagMatch[1] ?? tagMatch[0];
      if (tagValue) {
        tagsInTest.add(tagValue);
      }
    }
    for (const tag of tagsInTest) {
      if (!manifest.has(tag)) {
        manifest.set(tag, []);
      }
      manifest.get(tag).push(title);
    }
  }

  if (fallback && manifest.size === 0) {
    const tagRe = cloneRegex(tagRegex);
    let tagMatch;
    while ((tagMatch = tagRe.exec(testSources)) !== null) {
      const tagValue = tagMatch[2] ?? tagMatch[1] ?? tagMatch[0];
      if (tagValue && !manifest.has(tagValue)) {
        manifest.set(tagValue, []);
      }
    }
  }

  return manifest;
}

export function runVerifier({
  decorator,
  baseDir,
  rulesPath,
  dataPath,
  componentDir,
  optionOrder,
  afterVerification,
  overlayBuilder,
  coverageRunner,
  logLabel,
}) {
  if (typeof coverageRunner === 'function') {
    coverageRunner();
  } else {
    refreshCoverage(baseDir);
  }

  const rules = readJson(rulesPath);
  const data = readJson(dataPath);
  const resolvedOptionOrder = optionOrder || resolveOptionOrder(decorator, rules);

  verifyCoverageConsistency({ decorator, rules, data, optionOrder: resolvedOptionOrder, componentDir });
  if (typeof afterVerification === 'function') {
    afterVerification({ rules, data, optionOrder: resolvedOptionOrder });
  }

  if (typeof overlayBuilder === 'function') {
    overlayBuilder({ rules, data, optionOrder: resolvedOptionOrder });
  }

  console.log(`${logLabel ?? decorator} verification completed successfully.`);
}
