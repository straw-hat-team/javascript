# @straw-hat/eslint-config-prettier

Straw Hat Team `ESLint` configurations for `@straw-hat/prettier-config`
integration.

It makes sure that `ESLint` and `Prettier` works together without issues.

## Installation

Add the dependency.

```bash
yarn add -D \
  @straw-hat/eslint-config-prettier \
  eslint-config-prettier \
  eslint-plugin-prettier
```

Extend your `ESLint` configuration:

```js
module.exports = {
  extends: ['@straw-hat/eslint-config-prettier'],
};
```
