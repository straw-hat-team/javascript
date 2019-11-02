import { JestConfigChain } from '../src';

it('outputs the right configuration', () => {
  const config = new JestConfigChain()
    .automock(true)
    .bail(2)
    .browser(true)
    .cacheDirectory('/tmp/<path>')
    .clearMocks(true)
    .collectCoverage(true)
    .collectCoverageFrom.add('**/*.{js,jsx}')
    .add('!**/node_modules/**')
    .add('!**/vendor/**')
    .end()
    .coverageDirectory('coverage')
    .coveragePathIgnorePatterns.add('/node_modules/')
    .end()
    .coverageReporters.add('json')
    .add('lcov')
    .add('text')
    .add('clover')
    .end()
    .coverageThreshold({
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
        statements: 50,
      },
      './src/components/': {
        branches: 40,
        statements: 40,
      },
      './src/reducers/**/*.js': {
        statements: 90,
      },
      './src/api/very-important-module.js': {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    })
    .dependencyExtractor('mymodule')
    .displayName({
      name: 'CLIENT',
      color: 'blue',
    })
    .errorOnDeprecated(false)
    .extraGlobals.add('Math')
    .end()
    .forceCoverageMatch.add('**/*.t.js')
    .end()
    .globals({
      __DEV__: true,
    })
    .globalSetup.add('setup.js')
    .add('teardown.js')
    .end()
    .toConfig();

  expect(config).toEqual({
    automock: true,
    bail: 2,
    browser: true,
    cacheDirectory: '/tmp/<path>',
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: [
      '**/*.{js,jsx}',
      '!**/node_modules/**',
      '!**/vendor/**',
    ],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/node_modules/'],
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 50,
        lines: 50,
        statements: 50,
      },
      './src/components/': {
        branches: 40,
        statements: 40,
      },
      './src/reducers/**/*.js': {
        statements: 90,
      },
      './src/api/very-important-module.js': {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
    dependencyExtractor: 'mymodule',
    displayName: {
      name: 'CLIENT',
      color: 'blue',
    },
    errorOnDeprecated: false,
    extraGlobals: ['Math'],
    forceCoverageMatch: ['**/*.t.js'],
    globals: {
      __DEV__: true,
    },
    globalSetup: ['setup.js', 'teardown.js'],
    globalTeardown: ['setup.js', 'teardown.js'],
    maxConcurrency: 5,
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
    moduleNameMapper: {
      '^image![a-zA-Z0-9$_-]+$': 'GlobalImageStub',
      '^[./a-zA-Z0-9$_-]+\\.png$': '<rootDir>/RelativeImageStub.js',
      'module_name_(.*)': '<rootDir>/substituted_module_$1.js',
    },
    modulePathIgnorePatterns: ['<rootDir>/build/'],
    modulePaths: ['<rootDir>/app/'],
    notify: false,
    notifyMode: 'failure-change',
    preset: './node_modules/foo-bar/jest-preset.js',
    prettierPath: 'prettier',
    projects: ['<rootDir>', '<rootDir>/examples/*'],
    reporters: [
      'default',
      ['<rootDir>/my-custom-reporter.js', { banana: 'yes', pineapple: 'no' }],
    ],
    resetMocks: false,
    resetModules: false,
    resolver: 'myresolver.js',
    restoreMocks: false,
    rootDir: '<rootDir>/src',
    roots: ['<rootDir>/src/', '<rootDir>/tests/'],
    runner: 'jest-runner',
    setupFiles: ['<rootDir>/mysetupFile1.js', '<rootDir>/mysetupFile2.js'],
    setupFilesAfterEnv: [
      '<rootDir>/mysetupFileAfterEnv1.js',
      '<rootDir>/mysetupFileAfterEnv2.js',
    ],
    snapshotResolver: 'mySnapshotResolver.js',
    snapshotSerializers: ['my-serializer-module'],
    testEnvironment: 'jsdom',
    testEnvironmentOptions: {
      userAgent: 'Agent/007',
    },
    testMatch: [
      '**/__tests__/**/*.[jt]s?(x)',
      '**/?(*.)+(spec|test).[jt]s?(x)',
    ],
    testPathIgnorePatterns: ['/node_modules/'],
    testRegex: ['(/__tests__/.*|(\\.|/)(test|spec))\\.[jt]sx?$'],
    testResultsProcessor: 'mytestResultsProcessor',
    testRunner: 'jasmine2',
    testSequencer: '@jest/test-sequencer',
    testURL: 'http://localhost',
    timers: 'real',
    transform: { '\\.js$': ['babel-jest', { rootMode: 'upward' }] },
    transformIgnorePatterns: ['/node_modules/'],
    unmockedModulePathPatterns: ['somemodule'],
    verbose: false,
    watchPathIgnorePatterns: ['some/path'],
    watchPlugins: [],
  });
});
