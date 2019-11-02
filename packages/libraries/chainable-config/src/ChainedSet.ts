import { Chainable } from './Chainable';
import { Configurable } from './Configurable';

export class ChainedSet<P, S = any> extends Chainable<P> {
  private store = new Set<S>();

  add(value: S) {
    this.store.add(value);
    return this;
  }

  prepend(value: S) {
    this.store = new Set([value, ...this.store]);
    return this;
  }

  clear() {
    this.store.clear();
    return this;
  }

  delete(value: S) {
    this.store.delete(value);
    return this;
  }

  values() {
    return this.store.values();
  }

  has(value: S) {
    return this.store.has(value);
  }

  merge(values: S[]) {
    this.store = new Set([...this.store, ...values]);
    return this;
  }

  toConfig() {
    return Array.from(this.values()).map((value: unknown) => {
      return Configurable.isConfigurable(value)
        ? (value as Configurable).toConfig()
        : value;
    });
  }
}
