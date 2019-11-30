import fs from 'fs';
import {
  PackageJSON,
  Environment,
  ShcConfig,
  ShcConfigFactory,
} from '../types';
import { Cache } from '../cache';
import { createDebugger } from '../debug';
import { FileSystem } from './file-system';

export class Workspace {
  private debug = createDebugger('workspace');

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

  private loadConfig = () => {
    const filePath = this.fs.resolve('shc.config.js');

    if (!fs.existsSync(filePath)) {
      return {};
    }

    this.debug(`Loading Shc Config: ${filePath}`);

    const configFactory: ShcConfigFactory = require(filePath);

    return configFactory({ env: this.env });
  };
}
