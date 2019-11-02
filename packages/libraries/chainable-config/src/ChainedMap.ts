import deepMerge from 'deepmerge';
import isMergeable from 'is-mergeable-object';
import { Chainable } from './Chainable';
import { Configurable } from './Configurable';

export enum OrderPositions {
  before = 'before',
  after = 'after',
}

function relativePosition(index: number, order: OrderPositions) {
  return order === OrderPositions.before ? index : index + 1;
}

const byKey = (key: string) => (entry: [string, any]) => entry[0] === key;

export class ChainedMap<P, S = any> extends Chainable<P> {
  protected store = new Map<string, S>();

  private computeAndSet(key: string, fn: () => S) {
    const value = fn();
    this.set(key, value);
  }

  static isChainedMap(value: unknown) {
    return value instanceof ChainedMap;
  }

  clear() {
    this.store.clear();
    return this;
  }

  delete(key: string) {
    this.store.delete(key);
    return this;
  }

  get(key: string) {
    return this.store.get(key);
  }

  set(key: string, value: S) {
    this.store.set(key, value);
    return this;
  }

  has(key: string) {
    return this.store.has(key);
  }

  entries() {
    return this.store.entries();
  }

  keys() {
    return this.store.keys();
  }

  values() {
    return this.store.values();
  }

  getOrCompute(key: string, fn: () => S): S {
    if (!this.has(key)) {
      this.computeAndSet(key, fn);
    }

    return this.get(key)!;
  }

  move(key: string, order: OrderPositions, relativeKey: string) {
    if (!this.store.has(key) || !this.store.has(relativeKey)) {
      return this;
    }

    const entries = Array.from(this.store.entries());

    const fromIndex = entries.findIndex(byKey(key));
    const element = entries[fromIndex];

    entries.splice(fromIndex, 1);

    const relativeIndex = entries.findIndex(byKey(relativeKey));
    const toIndex = relativePosition(relativeIndex, order);

    entries.splice(toIndex, 0, element);

    this.store = new Map(entries);

    return this;
  }

  merge(values: Record<string, S>, omit: string[] = []) {
    Object.keys(values).forEach(key => {
      if (omit.includes(key)) {
        return;
      }

      const currentValue = this.get(key);
      const nextValue = values[key];

      if (ChainedMap.isChainedMap(currentValue)) {
        // @ts-ignore FIX: figure out the casting from S to ChainedMap
        currentValue!.merge(nextValue);
        return;
      }

      if (isMergeable(currentValue) && isMergeable(nextValue)) {
        const mergedValue = deepMerge<S>(currentValue!, nextValue);
        this.set(key, mergedValue);
        return;
      }

      this.set(key, nextValue);
    });

    return this;
  }

  toConfig() {
    const initialValue: Record<string, any> = {};
    return Array.from(this.store).reduce((config, [key, value]) => {
      config[key] = Configurable.isConfigurable(value)
        ? ((value as unknown) as Configurable).toConfig()
        : value;
      return config;
    }, initialValue);
  }
}
