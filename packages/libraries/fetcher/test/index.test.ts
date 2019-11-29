import * as DefaultPackage from '../src/index';

// What is the point of this test you may ask
// Answer: none
// Since Jest/istanbul need to find a solution about this I prefer to keep
// my coverage high by doing this

it('exports fetcher', () => {
  expect(DefaultPackage.fetcher).toBeDefined();
});
