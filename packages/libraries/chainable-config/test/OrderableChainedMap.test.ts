import { OrderableChainedMap } from '../src/OrderableChainedMap';
import { ChainedMap } from '../src/ChainedMap';

const parent = {};

describe('Given a OrderableChainedMap object', () => {
  describe('When calling before', () => {
    it('Then inserts the value before the other value', () => {
      const chainMap = new ChainedMap(parent);
      const orderableChainMap = new OrderableChainedMap(chainMap, 'two');
      chainMap.set('zero', 0);
      chainMap.set('one', 1);
      chainMap.set('two', orderableChainMap);
      orderableChainMap.before('one');
      const keys = Array.from(chainMap.keys());
      expect(keys).toEqual(['zero', 'two', 'one']);
    });
  });
  describe('When calling after', () => {
    it('Then inserts the value after the other value', () => {
      const chainMap = new ChainedMap(parent);
      const orderableChainMap = new OrderableChainedMap(chainMap, 'two');
      chainMap.set('zero', 0);
      chainMap.set('one', 1);
      chainMap.set('two', orderableChainMap);
      chainMap.set('three', 3);
      chainMap.set('four', 4);
      orderableChainMap.after('three');
      const keys = Array.from(chainMap.keys());
      expect(keys).toEqual(['zero', 'one', 'three', 'two', 'four']);
    });
  });
});
