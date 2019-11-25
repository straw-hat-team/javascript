# @straw-hat/neutrino-graphql

Adds support for GraphQL files.

## Installation

You need to add `graphql-tag` as well since it is a peer dependency.

```shell
yarn add graphql-tag
yarn add @straw-hat/neutrino-graphql -D
```

## Usage

```js
const { neutrinoGraphql } = require('@straw-hat/neutrino-graphql');

// Pass Webpack Chain config
neutrinoGraphql(config);

// Ready to 🎸
```

### Neutrino

Extend your Neutrino build configuration using the following code snippet.

```js
// .neutrinorc.js
const { neutrinoGraphql } = require('@straw-hat/neutrino-graphql');

module.exports = function(neutrino) {
  neutrino.use((neutrino) => neutrinoGraphql(neutrino.config));
};
```
