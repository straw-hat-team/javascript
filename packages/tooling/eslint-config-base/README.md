# @straw-hat/eslint-config

Straw Hat Team `ESLint` configurations.

Add the dependency:

```bash
yarn add -D \
  @straw-hat/eslint-config \
  prettier \
  eslint \
  eslint-config-airbnb \
  eslint-config-prettier \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  babel-eslint \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint-plugin-cypress
```

Set your `ESLint` configuration:

```js
module.exports = {
  extends: '@straw-hat/eslint-config',
};
```
