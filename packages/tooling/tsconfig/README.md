# @straw-hat/tsconfig

Base TypeScript configurations for Straw Hat Team.

## Installation

```bash
yarn add @straw-hat/tsconfig -D
```

## Configuration

Extend your `tsconfig.json` files:

```json
{
  "extends": "@straw-hat/tsconfig/lib"
}
```

There are three types of configurations:

- `base`: Based configuration with good defaults.
- `lib`: Used for library packages.
- `web`: Used for React web applications.
- `cypress`: Used for Cypress tests.
