# Neutrino GraphQL Preset

`@straw-hat/neutrino-graphql` is a Neutrino preset that supports GraphQL files.
Uses `graphql-tag` Webpack loader.

## Installation

You need to add `graphql-tag` as well since it is a peer dependency.

```shell
yarn add graphql-tag
yarn add @straw-hat/neutrino-graphql -D
```

## Usage

Extend your Neutrino build configuration.

```js
// .neutrinorc.js
const graphql = require('@straw-hat/neutrino-graphql');

module.exports = function(neutrino) {
  neutrino.use(graphql());
};
```
