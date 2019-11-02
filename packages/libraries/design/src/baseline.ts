const DEFAULT_BASE = 16;

const DECIMAL_PLACES = 2;

export enum BaselineUnits {
  px = "px",
  em = "em",
  rem = "rem",
}

export interface IBaselineConfiguration {
  base?: number;
  unit?: BaselineUnits;
}

/**
 * Baseline uses a fixed incremental number for do calculations.
 * This allow you to calculate numbers based on the same base number.
 *
 * Formula: Base * Value
 */
export class Baseline {
  /**
   * The base number for the calculation
   */
  private readonly base: number;

  /**
   * The unit used for the output when it requires a unit.
   */
  private readonly unit: BaselineUnits;

  public constructor(configuration: IBaselineConfiguration = {}) {
    this.base = configuration.base || DEFAULT_BASE;
    this.unit = configuration.unit || BaselineUnits.px;
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
   * Formula: Base * Value
   *
   * @param value the value which will be scaled to.
   */
  private calculate(value: number): number {
    return this.base * value;
  }
}
