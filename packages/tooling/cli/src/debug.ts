import debug from 'debug';

export function createDebug(...scope: string[]) {
  const namespace = ['@straw-hat/cli', ...scope].join(':');
  return debug(namespace);
}
