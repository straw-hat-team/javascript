# @straw-hat/eslint-config-react

Straw Hat Team `ESLint` React configurations.

Add the dependency:

```bash
yarn add -D \
  @straw-hat/eslint-config-base \
  @straw-hat/eslint-config-prettier \
  @typescript-eslint/eslint-plugin \
  @typescript-eslint/parser \
  eslint \
  eslint-config-airbnb \
  eslint-config-airbnb-base \
  eslint-config-prettier \
  eslint-plugin-import \
  eslint-plugin-jsx-a11y \
  eslint-plugin-prettier \
  eslint-plugin-react \
  eslint-plugin-react-hooks
```

Set your `ESLint` configuration:

```js
module.exports = {
  extends: ['@straw-hat/eslint-config-react'],
};
```
