import { Baseline } from "baseline";

it("should do the correct math", () => {
  const bl = new Baseline();
  expect(bl.scale(1)).toBe(16);
  expect(bl.scaleWithUnit(1)).toBe("16px");
});
