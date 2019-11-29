import * as path from 'path';
import * as fs from 'fs';
import { createDebugger } from '../debug';
import { Context } from './types';

export class FileSystem {
  private debug = createDebugger('workspace', 'filesystem');

  public context: Context;

  constructor(context: Context) {
    this.context = context;
  }

  existsSync(...pathSegments: string[]) {
    const filePath = this.resolve(...pathSegments);
    return fs.existsSync(filePath);
  }

  writeFileSync(filePath: string, data: any) {
    const resolvedFilePath = this.resolve(filePath);
    this.debug(`Writing File: ${resolvedFilePath}`);
    return fs.writeFileSync(resolvedFilePath, data);
  }

  resolve(...pathSegments: string[]) {
    return path.resolve(this.context, ...pathSegments);
  }
}
