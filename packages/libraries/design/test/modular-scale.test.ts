import { ModularScale } from '../src/modular-scale';

it('should do the correct math', () => {
  const ms = new ModularScale();
  expect(ms.scale(1)).toBe(25.89);
  expect(ms.scaleWithUnit(1)).toBe('25.89rem');
});
