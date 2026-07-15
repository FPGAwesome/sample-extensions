declare module '@sample-ide/extension-api' {
  export type Disposable = {
    dispose(): void;
  };

  export type ExtensionContext = {
    readonly extensionId: string;
    readonly extensionPath: string;
    readonly permissions: readonly string[];
    readonly workspace: {
      readonly rootPath?: string;
    };
    readonly commands: {
      registerCommand(command: string, handler: (...args: unknown[]) => unknown | Promise<unknown>): Disposable;
    };
  };
}
