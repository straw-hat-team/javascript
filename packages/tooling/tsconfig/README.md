# @straw-hat/tsconfig

Base TypeScript configurations.

## Get Started

### Installation

Install the dependency in your package.

```sh
yarn add -D @straw-hat/tsconfig
```

### Configuration

Extend your `tsconfig.json` files.

```json
{
  "extends": "@straw-hat/tsconfig/{type}"
}
```

These is the list of available configuration types:

- **base**: good defaults, use it for libraries.
- **react**: for React web applications.
- **cypress**: for Cypress tests.
