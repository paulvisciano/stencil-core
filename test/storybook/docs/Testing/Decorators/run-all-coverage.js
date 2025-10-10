import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const scripts = [
  'Component/coverage.js',
  'Prop/coverage.js',
  'Event/coverage.js',
  'Listen/coverage.js',
  'Method/coverage.js',
  'State/coverage.js',
];

scripts.forEach(script => {
  const scriptPath = path.resolve(__dirname, script);
  console.log(`Running ${script}...`);
  try {
    execSync(`node ${scriptPath}`, { stdio: 'inherit' });
    console.log(`${script} completed successfully.`);
  } catch (error) {
    console.error(`Error running ${script}:`, error);
    process.exit(1);
  }
});

console.log('All coverage scripts completed successfully.');
