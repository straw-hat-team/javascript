import debug from 'debug';

export function createDebugger(...scope: string[]) {
  const namespace = ['@straw-hat/cli', ...scope].join(':');
  return debug(namespace);
}
