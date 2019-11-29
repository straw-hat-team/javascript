import { flags } from '@oclif/command';
import del from 'del';
import { prompt } from 'enquirer';
import { BaseCommand } from '../base-command';

export class DelCommand extends BaseCommand {
  static description = 'Removes things';

  static args = [
    {
      name: 'path',
      required: true,
      description: 'Path that will be remove',
    },
  ];

  static strict = false;

  static flags = {
    yes: flags.boolean({
      default: false,
      char: 'y',
      description: "Automatically answer 'Yes' to the question",
    }),
    dryRun: flags.boolean({
      default: false,
      char: 'd',
      description: 'List what would be deleted instead of deleting',
    }),
    force: flags.boolean({
      default: false,
      char: 'f',
      description: 'Allow deleting the current working directory and outside',
    }),
  };

  async run() {
    const { args, flags } = this.parse(DelCommand);

    if (!flags.dryRun) {
      await this.confirm(flags, args);
    }

    const deletedFiles = await del(args.path, {
      force: flags.force,
      dryRun: flags.dryRun,
    });

    if (flags.dryRun) {
      this.log(deletedFiles.join('\n'));
    }
  }

  private async confirm(flags: { yes: boolean }, args: { path: string }) {
    const response = await prompt<{ shouldRun: boolean }>({
      type: 'confirm',
      initial: true,
      name: 'shouldRun',
      message: `Are you sure you want to remove "${args.path}"?`,
      skip: flags.yes,
    });

    if (!response.shouldRun) {
      this.exit(0);
    }
  }
}
