import { flags } from '@oclif/command';
import { GlobalConfig } from '@jest/types/build/Config';
import * as jest from 'jest-cli';
import * as ciInfo from 'ci-info';
import { BaseCommand } from '../base-command';
import { Environment } from '../types';

export default class JestCommand extends BaseCommand {
  protected env: Environment = 'test';

  static description = [
    'Runs Jest. Visit https://jestjs.io/docs/en/cli for more information about',
    'all available flags. You can pass any flag from Jest CLI.',
  ].join(' ');

  static flags = {
    config: flags.string({
      description: [
        'The path to a Jest config file specifying how to find and',
        'execute tests.',
      ].join(' '),
    }),
  };

  static strict = false;

  async run() {
    // eslint-disable-next-line no-shadow
    const { flags, argv } = this.parse(JestCommand);
    const config = flags.config ? flags.config : this.getConfig();

    argv.push('--config', JSON.stringify(config));

    if (ciInfo.isCI) {
      argv.push('--ci');
    }

    jest.run(argv);
  }

  private getConfig() {
    const baseConfig = JestCommand.getBaseConfig();
    return this.workspace!.config.jestConfig
      ? this.workspace!.config.jestConfig(baseConfig)
      : baseConfig;
  }

  private static getBaseConfig(): Partial<GlobalConfig> {
    return {};
  }
}
