export class Cache<K, V> {
  private store = new Map<K, V>();

  getOrSet(key: K, callback: (key: K) => V) {
    if (!this.has(key)) {
      this.set(key, callback(key));
    }

    return this.get(key);
  }

  get(key: K) {
    return this.store.get(key);
  }

  has(key: K) {
    return this.store.has(key);
  }

  set(key: K, value: V) {
    this.store.set(key, value);
    return this;
  }
}
