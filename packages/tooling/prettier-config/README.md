# @straw-hat/prettier-config

Base Prettier configuration for Straw Hat Team.

## Installation

```bash
yarn add -D @straw-hat/prettier-config prettier
```

## Configuration

Extend your `package.json`

```json
{
  "prettier": "@straw-hat/prettier-config"
}
```

## Formatting files

### CLI

Formatting every file as you save it is nice, but we can also format all source
files at once using Prettier CLI.

In the `package.json`, add a `format` script to format files matching the mask,
and to write them back to disk. Also add `format:check` script to check for
existing issues in CI.

```json
{
  "scripts": {
    "format": "prettier --write '**/*'",
    "format:ci": "yarn format --check"
  }
}
```

### Staged files on commit

Whenever we work with files locally, we might accidentally commit them without
proper styling.

That's where Git hooks and formatting staged files comes in
handy. To consistently format all files before committing and then commit
changes, we recommend using [husky](https://github.com/typicode/husky) +
[lint-staged](https://github.com/okonet/lint-staged) combination of tools.

```bash
yarn add -D husky lint-staged
```

Now configure pre-commit hook to run Prettier against staged JavaScript files.
In the `package.json` set the following.

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "**/*": ["yarn format", "git add"]
  }
}
```

See [lint-staged code formatting documentation](https://github.com/okonet/lint-staged#reformatting-the-code).

> You can skip the Git pre-commit hook by committing with -n flag.

### VSCode

To use the Prettier we have just installed from VSCode we need to install the
[Prettier VSCode extension](https://github.com/prettier/prettier-vscode):

1. Launch VS Code Quick Open (Ctrl+P)
2. Run the following command

```text
ext install esbenp.prettier-vscode
```

Because you might have global settings related to code formatting, we suggest
having in each repository a file with local workspace VSCode settings. Commit
this file `.vscode/settings.json` to source control to make sure everyone uses
the same extension to format the code.

```json
.vscode/settings.json

{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### Saving without formatting

If you ever work in someone else's project, please respect their formatting. In
order to avoid reformatting the entire file when you save it from VSCode, save
it without formatting. Run `"Command + Shift + P"` to open the Command Palette
and type "save without" until you see "File: Save without Formatting" command;
use that.

## Tips

### Ignoring files

Sometimes you have files that should not be formatted: auto-generated source
files, saved snapshots, etc. You can list file masks to ignore in file
`.prettierignore`. For example, to ignore all JavaScript files in snapshots
folders use.

```text
**/snapshots/*.js
yarn.lock
.DS_Store
LICENSE
.editorconfig
.gitignore
*.js.map
*.cmd
*.log
.prettierignore
mocha.opts
```

## Credits

Most content for this documentation were copied from
[How to configure Prettier and VSCode](https://glebbahmutov.com/blog/configure-prettier-in-vscode/).
Full credit for this amazing work from [@bahmutov](https://glebbahmutov.com/).
