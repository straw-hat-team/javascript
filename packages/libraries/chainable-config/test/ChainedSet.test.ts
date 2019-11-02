import { ChainedSet } from '../src/ChainedSet';

describe('Given a ChainedSet object', () => {
  describe('When calling .add()', () => {
    it('Then saves the value', () => {
      const chainSet = new ChainedSet(undefined);
      const context = chainSet.add('alpha');
      expect(chainSet.has('alpha')).toBeTruthy();
      expect(context).toBe(chainSet);
    });
  });

  describe('When calling .delete()', () => {
    it('Then removes the value', () => {
      const chainSet = new ChainedSet(undefined);
      chainSet.merge(['alpha', 'beta']);
      const context = chainSet.delete('alpha');
      expect(chainSet.has('alpha')).toBeFalsy();
      expect(context).toBe(chainSet);
    });
  });

  describe('When calling .clear()', () => {
    it('Then removes all the values', () => {
      const chainSet = new ChainedSet(undefined);
      chainSet.merge(['alpha', 'beta']);
      const context = chainSet.clear();
      const values = Array.from(chainSet.values());
      expect(values).toEqual([]);
      expect(context).toBe(chainSet);
    });
  });

  describe('When calling .has()', () => {
    describe('When the value does not exists', () => {
      it('Then returns false', () => {
        const chainSet = new ChainedSet(undefined);
        expect(chainSet.has('beta')).toBeFalsy();
      });
    });
    describe('When the value does exists', () => {
      it('Then returns true', () => {
        const chainSet = new ChainedSet(undefined);
        chainSet.add('beta');
        expect(chainSet.has('beta')).toBeTruthy();
      });
    });
  });

  describe('When calling .values()', () => {
    it('Then returns the list of values', () => {
      const chainSet = new ChainedSet(undefined);
      chainSet.merge(['alpha', 'beta', 'gamma', 'delta']);
      const values = Array.from(chainSet.values());
      expect(values).toEqual(['alpha', 'beta', 'gamma', 'delta']);
    });
  });

  describe('When calling .prepend()', () => {
    it('Then prepends the value', () => {
      const chainSet = new ChainedSet(undefined);
      chainSet.merge(['alpha', 'beta']);
      const context = chainSet.prepend('delta');
      const values = Array.from(chainSet.values());
      expect(values).toEqual(['delta', 'alpha', 'beta']);
      expect(context).toBe(chainSet);
    });
  });

  describe('When calling .merge()', () => {
    it('Then merges the values', () => {
      const chainSet = new ChainedSet(undefined);
      chainSet.add('alpha');
      chainSet.add('beta');
      const context = chainSet.merge(['gamma', 'delta']);
      const values = Array.from(chainSet.values());
      expect(values).toEqual(['alpha', 'beta', 'gamma', 'delta']);
      expect(context).toBe(chainSet);
    });
  });

  describe('When calling .toConfig()', () => {
    it('Then returns the configuration object', () => {
      const chainSet = new ChainedSet(undefined);
      const chainSet2 = new ChainedSet(chainSet);
      chainSet.merge(['alpha', 'beta', 'gamma', 'delta', chainSet2]);
      chainSet2.merge(['pepega', 'pogchamp']);
      const config = chainSet.toConfig();
      expect(config).toEqual([
        'alpha',
        'beta',
        'gamma',
        'delta',
        ['pepega', 'pogchamp'],
      ]);
    });
  });
});
