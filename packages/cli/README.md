@straw-hat/cli
==============

Straw Hat Team Platform CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@straw-hat/cli.svg)](https://npmjs.org/package/@straw-hat/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@straw-hat/cli.svg)](https://npmjs.org/package/@straw-hat/cli)
[![License](https://img.shields.io/npm/l/@straw-hat/cli.svg)](https://github.com/yordis/cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @straw-hat/cli
$ shc COMMAND
running command...
$ shc (-v|--version|version)
@straw-hat/cli/0.0.0 darwin-x64 node-v10.16.1
$ shc --help [COMMAND]
USAGE
  $ shc COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`shc hello [FILE]`](#shc-hello-file)
* [`shc help [COMMAND]`](#shc-help-command)

## `shc hello [FILE]`

describe the command here

```
USAGE
  $ shc hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ shc hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/yordis/cli/blob/v0.0.0/src/commands/hello.ts)_

## `shc help [COMMAND]`

display help for shc

```
USAGE
  $ shc help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.1/src/commands/help.ts)_
<!-- commandsstop -->
