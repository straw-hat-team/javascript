/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */

module.exports = function createPreset(api) {
  api.assertVersion(7);
  api.cache.forever();

  const presets = [
    [
      require('@babel/preset-env').default,
      {
        loose: true,
        targets: {
          node: 'current',
        },
      },
    ],
  ];

  const overrides = [
    {
      test: /\.tsx?$/,
      presets: [
        [
          require('@babel/preset-typescript').default,
          { isTSX: true, jsxPragma: 'React', allExtensions: true },
        ],
      ],
      plugins: [
        [
          require('@babel/plugin-proposal-decorators').default,
          { legacy: true },
        ],
      ],
    },
  ];

  return {
    presets,
    overrides,
  };
};
