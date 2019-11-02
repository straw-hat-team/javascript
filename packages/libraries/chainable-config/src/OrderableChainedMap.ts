import { ChainedMap, OrderPositions } from './ChainedMap';

export class OrderableChainedMap<P = any, S = any> extends ChainedMap<
  ChainedMap<P>,
  S
> {
  private key: string;

  constructor(parent: ChainedMap<P>, key: string) {
    super(parent);
    this.key = key;
  }

  before(key: string) {
    return this.parent.move(this.key, OrderPositions.before, key);
  }

  after(key: string) {
    return this.parent.move(this.key, OrderPositions.after, key);
  }
}
