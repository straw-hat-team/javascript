# @straw-hat/chainable-config

Use a chaining API to generate and simplify the modification of configs.

## Usage

```ts
const {
  ChainedMap,
  OrderableChainedMap,
  ChainedSet,
} = require('@straw-hat/chainable-config');

const chainedMap = new ChainedMap();

// ..or

export class DevServer<P> extends ChainedMap<P> {
  bonjour(value: boolean) {
    return this.set('bonjour', value);
  }
}

class MyConfig extends ChainedMap {
    // your own methods here..
  constructor() {
    super(undefined);
    this.set('devServer', new DevServer(this));
  }

  get devServer(): DevServer<MyConfig> {
    return this.get('devServer');
  }

  bail(value: boolean) {
    return this.set('bail', value);
  }
}

const myConfig = new MyConfig()

myConfig
  .bail(true)
  .devServer
    .bonjour(true);

// Return the config
myConfig.toConfig()
// {
//   bail: true,
//   devServer: {
//     bonjour: true
//   }
// }
```
