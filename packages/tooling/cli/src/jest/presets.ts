import { InitialOptions } from '@jest/types/build/Config';
import { defaults } from 'jest-config';
import fs from 'fs';
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

export function createBaseConfig(
  workspace: Workspace
): Partial<InitialOptions> {
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
    verbose: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.(js|jsx|ts|tsx)'],
    coverageDirectory: '<rootDir>/coverage',
    coveragePathIgnorePatterns: [
      '/node_modules/',
      '/__mocks__/',
      '/__tests__/',
      '.d.ts$',
    ],
    setupFiles,
    setupFilesAfterEnv,
    testEnvironment: 'node',
    testMatch: ['<rootDir>/test/**/*.test.{js,jsx,ts,tsx}'],
    transformIgnorePatterns: ['/node_modules/'],
    watchPlugins: [
      'jest-watch-typeahead/filename',
      'jest-watch-typeahead/testname',
    ],
  };
}
