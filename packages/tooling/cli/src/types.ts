import { InitialOptions } from '@jest/types/build/Config';

export type Environment = 'development' | 'test' | 'production' | 'e2e';

export type ShcConfig = {
  jestConfig?(config: Partial<InitialOptions>): Partial<InitialOptions>;
};

export type ShcConfigFactory = (params: { env: Environment }) => ShcConfig;

export type PackageJSON = {
  name: string;
  version: string;
  dependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  scripts?: Record<string, string>;
  homepage?: string;
};
