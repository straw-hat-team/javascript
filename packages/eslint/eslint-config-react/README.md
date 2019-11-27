# @straw-hat/eslint-config-react

Straw Hat Team `ESLint` React configurations.

It uses `@straw-hat/eslint-config-base` as the baseline, please visit the
package to find more information about ESLint.

## Installation

Add the dependency:

```bash
yarn add -D @straw-hat/eslint-config-react
```

Make sure to install the peer dependencies.

```bash
npx install-peerdeps --dev @straw-hat/eslint-config-react
```

## Configuration

Set your `ESLint` configuration:

```js
module.exports = {
  extends: ['@straw-hat/eslint-config-react'],
};
```