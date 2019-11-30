import Command from '@oclif/command';
import chalk from 'chalk';
import dotenv from 'dotenv';
import ciInfo from 'ci-info';
import dotenvExpand from 'dotenv-expand';
import fs from 'fs';
import { Workspace } from './workspace/workspace';
import { Environment } from './types';

export abstract class BaseCommand extends Command {
  protected env: Environment = 'development';

  protected workspace?: Workspace;

  async init() {
    const context = fs.realpathSync(process.cwd());
    const ciName = ciInfo.name ?? 'CI';

    this.workspace = new Workspace({
      env: this.env,
      context,
    });

    this.debug(`${this.config.name}: ${chalk.green(this.config.version)}`);
    this.debug(`Running on ${ciName}`);
    this.setupEnv();
  }

  newline() {
    this.log('');
  }

  setupEnv() {
    this.loadEnvVariables();
    this.setEnvMode();
  }

  private loadEnvVariables() {
    const dotenvPath = this.workspace!.fs.resolve('.env');

    const dotenvFiles = [
      `${dotenvPath}.${this.env}.local`,
      `${dotenvPath}.${this.env}`,
      this.env !== 'test' && `${dotenvPath}.local`,
      dotenvPath,
    ].filter(Boolean) as string[];

    dotenvFiles.filter(fs.existsSync).forEach((filePath: string) => {
      this.debug(`Loading Environment Variables File: ${filePath}`);
      dotenvExpand(dotenv.config({ path: filePath }));
    });
  }

  private setEnvMode() {
    if (!['development', 'test', 'production', 'e2e'].includes(this.env)) {
      this.log(
        chalk.red(
          [
            `"${this.env}" env is not supported. Please use one of the `,
            'following env:\n\n',
            '- production\n',
            '- development\n',
            '- test\n',
            '- e2e\n',
          ].join('')
        )
      );

      this.exit(1);
    }

    process.env.BABEL_ENV = this.env;
    process.env.NODE_ENV = this.env;

    this.debug(`Current Environment: ${chalk.green(this.env)}`);
  }

  protected async catch(error: Error | string) {
    if (error === '') {
      this.exit(1);
    }

    this.error(error);
  }
}
