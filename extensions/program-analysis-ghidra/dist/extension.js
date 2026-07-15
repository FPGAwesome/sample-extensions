"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
function activate(context) {
    context.commands.registerCommand('programAnalysis.describeExtension', () => ({
        message: 'Program Analysis extension is active.',
        extensionId: context.extensionId,
        workspaceRoot: context.workspace.rootPath ?? null
    }));
}
function deactivate() {
    // The host calls this before a package reload or application shutdown.
}
