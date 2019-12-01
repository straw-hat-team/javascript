const noop = () => undefined;

// @ts-ignore
export const IS_DEVELOPMENT = __DEV__ === true;

export function onDevelopment(
  onDevelopmentCallback: () => any,
  onProductionCallback = noop
) {
  return IS_DEVELOPMENT ? onDevelopmentCallback() : onProductionCallback();
}

export function onProduction(
  onProductionCallback: () => any,
  onDevelopmentCallback = noop
) {
  return onDevelopment(onDevelopmentCallback, onProductionCallback);
}
