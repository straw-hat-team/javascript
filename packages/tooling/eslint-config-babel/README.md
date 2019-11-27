# @straw-hat/eslint-config-babel

Straw Hat Team `ESLint` Babel configurations.

It uses `@straw-hat/eslint-config-base` as the baseline, please visit the
package to find more information about ESLint.

## Installation

Add the dependency:

```bash
yarn add -D @straw-hat/eslint-config-babel
```

Make sure to install the peer dependencies.

```bash
npx install-peerdeps --dev @straw-hat/eslint-config-babel
```

## Configuration

Set your `ESLint` configuration:

```js
module.exports = {
  extends: ['@straw-hat/eslint-config-babel'],
};
```
