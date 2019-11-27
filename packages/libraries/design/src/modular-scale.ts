const DEFAULT_BASE = 16;

const DECIMAL_PLACES = 2;

export enum ModularScaleRatios {
  minorSecond = 1.067,
  majorSecond = 1.125, // tslint:disable-line
  minorThird = 1.2,
  majorThird = 1.25,
  perfectFourth = 1.333,
  augFourth = 1.414,
  perfectFifth = 1.5,
  minorSixth = 1.6,
  goldenSection = 1.618,
  majorSixth = 1.667,
  minorSeventh = 1.778,
  majorSeventh = 1.875,
  octave = 2,
  majorTenth = 2.5,
  majorEleventh = 2.667,
  majorTwelfth = 3,
  doubleOctave = 4,
}

export enum ModularScaleUnits {
  unitless = '',
  px = 'px',
  em = 'em',
  rem = 'rem',
}

export interface IModularScaleConfiguration {
  base?: number;
  ratio?: number;
  unit?: ModularScaleUnits;
}

type Ratio = number | ModularScaleRatios;

/**
 * ModularScale uses a formula for calculate numbers.
 *
 * Formula: Ratio ** Value * Base
 */
export class ModularScale {
  /**
   * The base number for the calculation
   */
  private readonly base: number;

  /**
   * The ratio for the calculation.
   */
  private readonly ratio: Ratio;

  /**
   * The unit used for the output when it requires a unit.
   */
  private readonly unit: ModularScaleUnits;

  public constructor(configuration: IModularScaleConfiguration = {}) {
    this.base = configuration.base || DEFAULT_BASE;
    this.ratio = configuration.ratio || ModularScaleRatios.goldenSection;
    this.unit = configuration.unit || ModularScaleUnits.rem;
  }

  /**
   * Scale a number based on the baseline number.
   *
   * @param value the value which will be scaled to.
   */
  public scale(value: number): number {
    return Number(this.calculate(value).toFixed(DECIMAL_PLACES));
  }

  /**
   * Scale a number based on the baseline number but
   * it gives you an string wiht the unit on it.
   *
   * @param value the value which will be scaled to.
   */
  public scaleWithUnit(value: number): string {
    return `${this.scale(value)}${this.unit}`;
  }

  /**
   * Calculate the scaling.
   *
   * Formula: Ratio ** Value * Base
   *
   * @param value the value which will be scaled to.
   */
  private calculate(value: number): number {
    return this.ratio ** value * this.base;
  }
}
