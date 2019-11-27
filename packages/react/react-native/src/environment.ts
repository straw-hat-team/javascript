const noop = () => undefined;

// @ts-ignore
export const IS_DEVELOPMENT = __DEV__ === true;

export const onDevelopment = (
  onDevelopmentCallback: () => any,
  onProductionCallback = noop
) => (IS_DEVELOPMENT ? onDevelopmentCallback() : onProductionCallback());

export const onProduction = (
  onProductionCallback: () => any,
  onDevelopmentCallback = noop
) => onDevelopment(onDevelopmentCallback, onProductionCallback);
