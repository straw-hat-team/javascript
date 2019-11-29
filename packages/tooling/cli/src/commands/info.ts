import envinfo from 'envinfo';
import { BaseCommand } from '../base-command';

export default class Info extends BaseCommand {
  static description = 'Gather relevant information about the CLI';

  async run() {
    envinfo
      .run(
        {
          System: ['OS', 'CPU'],
          Binaries: ['Node', 'Yarn', 'npm'],
          npmPackages: '/**/{typescript,@straw-hat/*/}',
          npmGlobalPackages: ['@straw-hat/cli'],
        },
        {
          showNotFound: true,
          duplicates: true,
          fullTree: true,
        }
      )
      .then(console.log);
  }
}
