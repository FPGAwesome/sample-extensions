import type { ExtensionContext } from '@sample-ide/extension-api';

export function activate(context: ExtensionContext): void {
  context.commands.registerCommand('programAnalysis.describeExtension', () => ({
    message: 'Program Analysis extension is active.',
    extensionId: context.extensionId,
    workspaceRoot: context.workspace.rootPath ?? null
  }));
}

export function deactivate(): void {
  // The host calls this before a package reload or application shutdown.
}
