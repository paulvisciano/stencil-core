import fs from 'fs';
import path from 'path';
import { runVerifier, writeJson } from './verify-matrix-core.js';

/**
 * Common utility functions for generate-components.js scripts
 */

export function toPascalCase(tag) {
  return tag
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

export function handleHelp() {
  // Check for --help flag
  if (process.argv.includes('--help') || process.argv.includes('-h')) {
    console.log('Usage: node generate-components.js');
    console.log('');
    console.log('Generates all components for the decorator (overwrites existing files).');
    console.log('This ensures components always match the current template.');
    return { shouldExit: true };
  }
  
  return { shouldExit: false };
}

export function setupPaths({ rulesPath, dataPath, outputDir }) {
  // Validate required paths
  if (!fs.existsSync(rulesPath)) {
    console.error(`Missing rules file: ${rulesPath}`);
    process.exit(1);
  }
  
  // Create output directory if needed
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  return {
    rules: JSON.parse(fs.readFileSync(rulesPath, 'utf8')),
    data: fs.existsSync(dataPath) ? JSON.parse(fs.readFileSync(dataPath, 'utf8')) : null
  };
}

// Removed getMissingPermutations - we now always generate all components

export function generateComponents({
  allPermutations,
  rules,
  outputDir,
  buildNameSegments,
  buildComponentSource,
  getGroupDir = (options) => String(options[0]) // Default: use first option as group
}) {
  let created = 0;
  
  console.log(`Generating ${allPermutations.length} components...`);
  
  for (const entry of allPermutations) {
    const options = entry.options;
    if (!Array.isArray(options)) continue;

    const segs = buildNameSegments(options, rules);
    const baseName = segs.join('-');
    const fileName = `${baseName}.tsx`;

    const groupDir = getGroupDir(options);
    const targetDir = path.join(outputDir, groupDir);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const filePath = path.join(targetDir, fileName);
    // Always regenerate - no existence check needed

    const tag = baseName;
    const src = buildComponentSource(options, tag);
    fs.writeFileSync(filePath, src);
    created++;
  }

  console.log(`Generated ${created} components in ${outputDir}`);
  return created;
}

export function runPostGeneration({
  decorator,
  baseDir,
  rulesPath,
  dataPath,
  componentDir,
  buildComponentsIndex,
  logLabel
}) {
  // Rebuild index and verify immediately (merged flow)
  runVerifier({
    decorator,
    baseDir,
    rulesPath,
    dataPath,
    componentDir,
    coverageRunner: () => {
      const refreshed = buildComponentsIndex();
      writeJson(dataPath, refreshed);
    },
    logLabel: logLabel || `@${decorator} (generate+verify)`,
  });
}

/**
 * Main orchestrator for component generation
 * Always generates all components (no missing/force logic needed)
 */
export function generateComponentsMain({
  // Paths
  rulesPath,
  dataPath,
  outputDir,
  
  // Decorator-specific functions
  decorator,
  buildNameSegments,
  buildComponentSource,
  buildComponentsIndex,
  getAllPermutations, // Renamed from getForcePermutations
  getGroupDir,
  
  // Optional
  baseDir = path.resolve(path.dirname(rulesPath), '..'),
  logLabel
}) {
  // Handle help
  const { shouldExit } = handleHelp();
  if (shouldExit) return;

  // Setup paths and load data
  const { rules } = setupPaths({ rulesPath, dataPath, outputDir });

  // Get all permutations to generate
  const allPermutations = getAllPermutations();

  // Generate all components (always regenerate everything)
  generateComponents({
    allPermutations,
    rules,
    outputDir,
    buildNameSegments,
    buildComponentSource,
    getGroupDir
  });

  // Run post-generation verification
  runPostGeneration({
    decorator,
    baseDir,
    rulesPath,
    dataPath,
    componentDir: outputDir,
    buildComponentsIndex,
    logLabel
  });
}
