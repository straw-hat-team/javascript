module.exports = {
  extends: ['airbnb-base', '@straw-hat/eslint-config-prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/**'],
      },
    ],
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['self'] },
    ],
  },
};
