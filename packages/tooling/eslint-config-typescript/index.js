module.exports = {
  extends: ['@straw-hat/eslint-config-base'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier/@typescript-eslint',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: true,
      },
      rules: {
        // Fixes definition files imports
        'spaced-comment': ['error', 'always', { markers: ['/'] }],
        'no-unused-vars': 'off',
      },
    },
  ],
};
