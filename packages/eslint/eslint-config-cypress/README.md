# @straw-hat/eslint-config-cypress

Straw Hat Team `ESLint` Cypress configurations.

## Installation

Add the dependency:

```bash
yarn add -D @straw-hat/eslint-config-cypress
```

Make sure to install the peer dependencies.

```bash
npx install-peerdeps --dev @straw-hat/eslint-config-cypress
```

## Configuration

In your cypress project set your `ESLint` configuration:

```js
module.exports = {
  extends: ['@straw-hat/eslint-config-cypress'],
};
```
