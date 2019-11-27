# @straw-hat/eslint-config-base

Straw Hat Team `ESLint` base configurations.

Add the dependency:

```bash
yarn add -D \
  @straw-hat/eslint-config-base \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb-base \
  eslint-config-prettier \
  eslint-plugin-import \
```

Set your `ESLint` configuration:

```js
module.exports = {
  extends: ['@straw-hat/eslint-config-base'],
};
```
