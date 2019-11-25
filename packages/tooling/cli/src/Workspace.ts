import fs from 'fs';
import path from 'path';
import { Environment, ShcConfig, ShcConfigFactory } from './types';
import { Cache } from './Cache';
import { createDebug } from './debug';

export type Context = string;

export type PackageJSON = {
  name: string;
  version: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  scripts?: Record<string, string>;
  homepage?: string;
};

export class FileSystem {
  private debug = createDebug('workspace', 'filesystem');

  public context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  existsSync(...pathSegments: string[]) {
    const filePath = this.resolve(...pathSegments);
    return fs.existsSync(filePath);
  }

  writeFileSync(path: string, data: any) {
    const filePath = this.resolve(path);
    this.debug(`Writing File: ${filePath}`);
    return fs.writeFileSync(filePath, data);
  }

  resolve(...pathSegments: string[]) {
    return path.resolve(this.context, ...pathSegments);
  }
}

export class Workspace {
  private debug = createDebug('workspace');

  public fs: FileSystem;

  private cache: Cache<any, any>;

  public env: Environment;

  constructor(opts: { env: Environment; context: string }) {
    this.env = opts.env;
    this.fs = new FileSystem(opts.context);
    this.cache = new Cache<string, any>();
  }

  get packageJson(): PackageJSON {
    return this.cache.getOrSet('packageJson', this.loadPackageJson);
  }

  get config(): ShcConfig {
    return this.cache.getOrSet('config', this.loadConfig);
  }

  private loadPackageJson() {
    const filePath = this.fs.resolve('package.json');

    this.debug(`Loading Package JSON: ${filePath}`);

    return require(filePath);
  }

  private loadConfig() {
    const filePath = this.fs.resolve('shc.config.js');

    if (!fs.existsSync(filePath)) {
      return {};
    }

    this.debug(`Loading Shc Config: ${filePath}`);

    const configFactory: ShcConfigFactory = require(filePath);

    return configFactory({ env: this.env });
  }
}
