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
  "extends": "@straw-hat/tsconfig/{type}"
}
```

There are three types of configurations:

- **base**: Base configuration with good defaults.
- **react**: Used for React web applications.
- **cypress**: Used for Cypress tests.
