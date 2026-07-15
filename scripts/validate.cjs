const { existsSync, readFileSync } = require('node:fs');
const { join } = require('node:path');

const root = join(__dirname, '..');
const packagePaths = ['extensions/rust-language', 'extensions/program-analysis-ghidra'];

for (const packagePath of packagePaths) {
  const packageRoot = join(root, packagePath);
  const manifest = JSON.parse(readFileSync(join(packageRoot, 'ide-extension.json'), 'utf8'));
  const files = [manifest.main, ...(manifest.contributes.languages || []), ...(manifest.contributes.projectWorkflows || [])].filter(Boolean);
  const missing = files.filter((file) => !existsSync(join(packageRoot, file)));
  if (missing.length > 0) throw new Error(`${manifest.id} is missing: ${missing.join(', ')}`);
  process.stdout.write(`VALID ${manifest.id}@${manifest.version} (${packagePath})\n`);
}
