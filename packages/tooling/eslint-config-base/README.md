# @straw-hat/eslint-config-base

Straw Hat Team `ESLint` base configurations.

## Installation

Add the dependency:

```bash
yarn add -D @straw-hat/eslint-config-base
```

Make sure to install the peer dependencies.

```bash
npx install-peerdeps --dev @straw-hat/eslint-config-base
```

## Configuration

Set your `ESLint` configuration:

```js
module.exports = {
  extends: ['@straw-hat/eslint-config-base'],
};
```

## Linting files

### VSCode

Install [ESLint VSCode extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
called `dbaeumer.vscode-eslint`.

1. Launch VS Code Quick Open (Ctrl+P)
2. Run the following command

```text
ext install dbaeumer.vscode-eslint
```

Enable this extension in VSCode workspace settings.

```json
.vscode/settings.json

{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.enable": true
}
```
