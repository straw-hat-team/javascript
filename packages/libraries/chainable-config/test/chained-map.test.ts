import { ChainedMap, OrderPositions } from '../src/chained-map';

it('validates if a value is a chainable map object', () => {
  const chainMap = new ChainedMap(undefined);
  expect(ChainedMap.isChainedMap(chainMap)).toBeTruthy();
  expect(ChainedMap.isChainedMap('helloi')).toBeFalsy();
});

describe('Given a ChainedMap object', () => {
  describe('When calling .set()', () => {
    it('Then saves the value', () => {
      const chaiMap = new ChainedMap(undefined);
      const context = chaiMap.set('name', 'pepega');
      expect(chaiMap.has('name')).toBeTruthy();
      expect(context).toBe(chaiMap);
    });
  });

  describe('When calling .delete()', () => {
    it('Then removes the value', () => {
      const chaiMap = new ChainedMap(undefined);
      chaiMap.merge({ name: 'pepega', reaction: 'pogchamp' });
      const context = chaiMap.delete('name');
      expect(chaiMap.has('name')).toBeFalsy();
      expect(context).toBe(chaiMap);
    });
  });

  describe('When calling .keys()', () => {
    it('Then returns the list of keys', () => {
      const chaiMap = new ChainedMap(undefined);
      chaiMap.merge({ name: 'pepega', reaction: 'pogchamp' });
      const keys = Array.from(chaiMap.keys());
      expect(keys).toEqual(['name', 'reaction']);
    });
  });

  describe('When calling .clear()', () => {
    it('Then removes all the values', () => {
      const chaiMap = new ChainedMap(undefined);
      chaiMap.merge({ name: 'pepega', reaction: 'pogchamp' });
      const context = chaiMap.clear();
      const entries = Array.from(chaiMap.entries());
      expect(entries).toEqual([]);
      expect(context).toBe(chaiMap);
    });
  });

  describe('When calling .values()', () => {
    it('Then returns the list of values', () => {
      const chaiMap = new ChainedMap(undefined);
      chaiMap.merge({
        name: 'pepega',
        reaction: 'pogchamp',
        channel: 'alchemist_ubi',
      });
      const values = Array.from(chaiMap.values());
      expect(values).toEqual(['pepega', 'pogchamp', 'alchemist_ubi']);
    });
  });

  describe('When calling .entries()', () => {
    describe('When have entries', () => {
      it('Then returns the list of entries', () => {
        const chaiMap = new ChainedMap(undefined);
        chaiMap.merge({
          name: 'pepega',
          reaction: 'pogchamp',
          channel: 'alchemist_ubi',
        });
        const entries = Array.from(chaiMap.entries());
        expect(entries).toEqual([
          ['name', 'pepega'],
          ['reaction', 'pogchamp'],
          ['channel', 'alchemist_ubi'],
        ]);
      });
    });
  });

  describe('When calling .has()', () => {
    describe('When the value does not exists', () => {
      it('Then returns false', () => {
        const chaiMap = new ChainedMap(undefined);
        expect(chaiMap.has('name')).toBeFalsy();
      });
    });
    describe('When the value does exists', () => {
      it('Then returns true', () => {
        const chaiMap = new ChainedMap(undefined);
        chaiMap.set('name', 'pepega');
        expect(chaiMap.has('name')).toBeTruthy();
      });
    });
  });

  describe('When calling .merge()', () => {
    it('Then merges the values', () => {
      const chaiMap = new ChainedMap(undefined);
      chaiMap.merge({
        name: 'pepeg',
        hello: 'world',
        items: [1, 2, 3],
      });
      const context = chaiMap.merge({
        newKey: true,
        name: 'pepega',
        items: [4, 5, 6],
      });
      const entries = Array.from(chaiMap.entries());
      expect(entries).toEqual([
        ['name', 'pepega'],
        ['hello', 'world'],
        ['items', [1, 2, 3, 4, 5, 6]],
        ['newKey', true],
      ]);
      expect(context).toBe(chaiMap);
    });

    describe('When omitting keys', () => {
      it('Then merges the values omitting the keys', () => {
        const chaiMap = new ChainedMap(undefined);
        const context = chaiMap.merge(
          {
            name: 'pepeg',
            hello: 'world',
            items: [1, 2, 3],
          },
          ['items']
        );
        const entries = Array.from(chaiMap.entries());
        expect(entries).toEqual([
          ['name', 'pepeg'],
          ['hello', 'world'],
        ]);
        expect(context).toBe(chaiMap);
      });
    });
  });

  describe('When calling .getOrCompute()', () => {
    describe('When the key is not present', () => {
      it('Then sets and returns the value', () => {
        const setter = () => 'alpha';
        const chaiMap = new ChainedMap(undefined);
        expect(chaiMap.getOrCompute('a', setter)).toBe('alpha');
        expect(chaiMap.get('a')).toBe('alpha');
      });
    });

    describe('When the key is present', () => {
      it('Then returns the value', () => {
        const setter = () => 'alpha';
        const chaiMap = new ChainedMap(undefined);
        chaiMap.set('a', 1);
        expect(chaiMap.getOrCompute('a', setter)).toBe(1);
        expect(chaiMap.get('a')).toBe(1);
      });
    });
  });

  describe('When calling .toConfig()', () => {
    describe('When does not have entries', () => {
      it('Then returns a empty configuration object', () => {
        const chaiMap = new ChainedMap(undefined);
        const config = chaiMap.toConfig();
        expect(config).toEqual({});
      });
    });
    describe('When have some entries', () => {
      it('Then returns a configuration object', () => {
        const chaiMap = new ChainedMap(undefined);
        const chaiMap2 = new ChainedMap(undefined);
        chaiMap2.merge({
          name: 'pogchamp',
          hello: 'ubi',
        });
        chaiMap.merge({
          name: 'pepeg',
          hello: 'world',
          answer: chaiMap2,
        });
        const config = chaiMap.toConfig();
        expect(config).toEqual({
          name: 'pepeg',
          hello: 'world',
          answer: {
            name: 'pogchamp',
            hello: 'ubi',
          },
        });
      });
    });
  });

  describe('When calling .move()', () => {
    it('Then inserts the value before the other value', () => {
      const chainMap = new ChainedMap(undefined);
      chainMap.set('zero', 0);
      chainMap.set('one', 1);
      chainMap.set('two', 2);
      chainMap.move('two', OrderPositions.before, 'one');
      const values = Array.from(chainMap.values());
      expect(values).toEqual([0, 2, 1]);
    });
    it('Then inserts the value after the other value', () => {
      const chainMap = new ChainedMap(undefined);
      chainMap.set('zero', 0);
      chainMap.set('one', 1);
      chainMap.set('two', 2);
      chainMap.set('three', 3);
      chainMap.set('four', 4);
      chainMap.move('two', OrderPositions.after, 'three');
      const values = Array.from(chainMap.values());
      expect(values).toEqual([0, 1, 3, 2, 4]);
    });

    it('Then does not move the value if the keys do not exists', () => {
      const chainMap = new ChainedMap(undefined);
      chainMap.set('zero', 0);
      chainMap.set('one', 1);
      chainMap.set('two', 2);
      chainMap.set('three', 3);
      chainMap.set('four', 4);

      chainMap.move('five', OrderPositions.after, 'one');
      chainMap.move('four', OrderPositions.after, 'six');

      const values = Array.from(chainMap.values());
      expect(values).toEqual([0, 1, 2, 3, 4]);
    });
  });
});
