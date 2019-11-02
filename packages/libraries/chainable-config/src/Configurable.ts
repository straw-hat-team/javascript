export class Configurable {
  static isConfigurable(value: unknown) {
    return value instanceof Configurable;
  }

  toConfig() {
    throw new Error('Not implemented');
  }
}
