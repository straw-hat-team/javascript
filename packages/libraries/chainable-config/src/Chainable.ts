import { Configurable } from './Configurable';
export type BatchHandler = (context: Chainable<any>) => any;

export class Chainable<P> extends Configurable {
  protected parent: P;

  constructor(parent: P) {
    super();
    this.parent = parent;
  }

  static isChainable(value: unknown) {
    return value instanceof Chainable;
  }

  batch(handler: BatchHandler) {
    handler(this);
    return this;
  }

  end() {
    return this.parent;
  }

  when(
    predicate: boolean,
    whenTruthy: BatchHandler = Function.prototype as BatchHandler,
    whenFalsy: BatchHandler = Function.prototype as BatchHandler,
  ) {
    const callback = predicate ? whenTruthy : whenFalsy;
    callback(this);
    return this;
  }
}
