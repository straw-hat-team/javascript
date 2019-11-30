import del from 'del';
import { BaseCommand } from '../../base-command';

export default class LibCleanCommand extends BaseCommand {
  static description = 'Cleans the distribution folder.';

  async run() {
    const folderPath = this.workspace!.fs.resolve('dist');
    this.debug(`Deleting ${folderPath}`);
    await del(folderPath);
  }
}
