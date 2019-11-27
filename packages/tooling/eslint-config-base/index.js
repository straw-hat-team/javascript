module.exports = {
  extends: ['airbnb-base', '@straw-hat/eslint-config-prettier'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: 'babel-eslint',
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
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/*.(spec|test|story).(t|j)s?x', '**/__tests__/**'],
      },
    ],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['self'] },
    ],
  },
};
