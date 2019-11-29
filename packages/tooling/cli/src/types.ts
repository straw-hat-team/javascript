import { GlobalConfig } from '@jest/types/build/Config';

export type Environment = 'development' | 'test' | 'production' | 'e2e';

export type ShcConfig = {
  jestConfig?(config: Partial<GlobalConfig>): Partial<GlobalConfig>;
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
