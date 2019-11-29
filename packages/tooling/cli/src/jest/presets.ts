import { GlobalConfig } from '@jest/types/build/Config';
import { defaults } from 'jest-config';
import * as fs from 'fs';
import { Workspace } from '../workspace/workspace';

function getSetupFilesPath(workspace: Workspace) {
  return defaults.moduleFileExtensions
    .map((ext) => workspace.fs.resolve('test', `setup-files.${ext}`))
    .find(fs.existsSync);
}

function getSetupFrameworkPath(workspace: Workspace) {
  return defaults.moduleFileExtensions
    .map((ext) => workspace.fs.resolve('test', `setup-framework.${ext}`))
    .find(fs.existsSync);
}

export function createBaseConfig(workspace: Workspace): Partial<GlobalConfig> {
  const moduleNameMapper: Record<string, string> = {};

  moduleNameMapper['^@/(.*)$'] = '<rootDir>/src/$1';

  const setupFilesAfterEnv: string[] = [];
  const setupFiles: string[] = [];

  const setupFrameworkPath = getSetupFrameworkPath(workspace);

  if (setupFrameworkPath) {
    setupFilesAfterEnv.push(setupFrameworkPath);
  }

  const setupFilesPath = getSetupFilesPath(workspace);

  if (setupFilesPath) {
    setupFiles.push(setupFilesPath);
  }

  return {
    collectCoverageFrom: ['<rootDir>/src/**/*.(js|jsx|ts|tsx)'],
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/__mocks__/',
      '/__tests__/',
      '.d.ts$',
    ],
    moduleNameMapper,
    setupFiles,
    setupFilesAfterEnv,
    testEnvironment: 'node',
    testMatch: ['<rootDir>/tests/jest/**/*.test.{js,jsx,ts,tsx}'],
    transformIgnorePatterns: ['/node_modules/'],
    // @ts-ignore https://github.com/facebook/jest/pull/9246
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  };
}
