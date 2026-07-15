const { existsSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

const root = join(__dirname, '..');
const manifest = JSON.parse(readFileSync(join(root, 'ide-extension.json'), 'utf8'));
const requiredFiles = [manifest.main, ...(manifest.contributes.projectWorkflows || [])].filter(Boolean);
const missing = requiredFiles.filter((file) => !existsSync(join(root, file)));

if (manifest.id !== 'sample.program-analysis' || missing.length > 0) {
  throw new Error(`Invalid extension package. Missing: ${missing.join(', ')}`);
}

process.stdout.write(`VALID ${manifest.id}@${manifest.version}\n`);
