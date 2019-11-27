module.exports = {
  extends: ['airbnb-base', '@straw-hat/eslint-config-prettier'],
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
