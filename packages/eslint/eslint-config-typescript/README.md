# @straw-hat/eslint-config-typescript

Straw Hat Team `ESLint` TypeScript configurations.

It uses `@straw-hat/eslint-config-base` as the baseline, please visit the
package to find more information about ESLint.

## Installation

Add the dependency:

```bash
yarn add -D @straw-hat/eslint-config-typescript
```

Make sure to install the peer dependencies.

```bash
npx install-peerdeps --dev @straw-hat/eslint-config-typescript
```

## Configuration

Set your `ESLint` configuration:

```js
{
  "extends": ["@straw-hat/eslint-config-typescript"]
}
```

## Linting files

### VSCode

Extend your `settings.json` to lint TypeScript files as well.

```json
.vscode/settings.json

{
  "eslint.validate": [
    "javascript",
    "typescript"
  ]
}
```
