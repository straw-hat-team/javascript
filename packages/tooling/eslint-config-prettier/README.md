# @straw-hat/eslint-config-prettier

Straw Hat Team `ESLint` configurations for `@straw-hat/prettier-config`
integration.

It makes sure that `ESLint` and `Prettier` works together without issues.

## Installation

Add the dependency.

```bash
yarn add -D @straw-hat/eslint-config-prettier
```

Make sure to install the peer dependencies.

```bash
npx install-peerdeps --dev @straw-hat/eslint-config-prettier
```

## Configuration

Extend your `ESLint` configuration:

```js
module.exports = {
  extends: ['@straw-hat/eslint-config-prettier'],
};
```

### VSCode

Let's configure VSCode to use ESLint to auto-fix found issues, including
Prettier. The workspace settings use [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

```json
.vscode/settings.json

{
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.autoFixOnSave": true
}
```
