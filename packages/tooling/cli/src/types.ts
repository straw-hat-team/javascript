export type Environment = 'development' | 'test' | 'production' | 'e2e';

export type ShcConfig = {};

export type ShcConfigFactory = (params: { env: Environment }) => ShcConfig;
