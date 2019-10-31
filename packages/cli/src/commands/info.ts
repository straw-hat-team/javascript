import { Command } from '@oclif/command';

export default class Info extends Command {
  static description = 'Gather relevant information about the CLI';

  async run() {
    const envinfo = require('envinfo');

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
