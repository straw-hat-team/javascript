import { Command, flags } from '@oclif/command';

export class DelCommand extends Command {
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
    const del = require('del');
    const { prompt } = require('enquirer');

    const { args, flags } = this.parse(DelCommand);

    const response = await prompt({
      type: 'confirm',
      initial: true,
      name: 'shouldRun',
      message: `Are you sure you want to remove ${args.path}?`,
      skip: flags.yes,
    });

    if (!response.shouldRun) {
      return;
    }

    await del(args.path, {
      force: flags.force,
      dryRun: flags.dryRun,
    });
  }
}
