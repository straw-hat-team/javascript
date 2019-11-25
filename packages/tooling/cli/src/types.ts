export type Environment = 'development' | 'test' | 'production';

export type ShcConfig = {};

export type ShcConfigFactory = (params: { env: Environment }) => ShcConfig;
