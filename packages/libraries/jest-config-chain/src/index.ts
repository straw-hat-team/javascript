import { ChainedMap, ChainedSet } from '@straw-hat/chainable-config';

export interface CoverageThreshold {
  [K: string]: {
    branches?: number;
    functions?: number;
    lines?: number;
    statements?: number;
  };
}

export interface ProjectConfig {}

export class JestConfigChain extends ChainedMap<undefined> {
  constructor() {
    super(undefined);
    this.set('collectCoverageFrom', new ChainedSet(this));
    this.set('coveragePathIgnorePatterns', new ChainedSet(this));
    this.set('coverageReporters', new ChainedSet(this));
    this.set('extraGlobals', new ChainedSet(this));
    this.set('forceCoverageMatch', new ChainedSet(this));
    this.set('globalSetup', new ChainedSet(this));
  }

  get globalSetup(): ChainedSet<JestConfigChain> {
    return this.get('globalSetup');
  }

  get forceCoverageMatch(): ChainedSet<JestConfigChain> {
    return this.get('forceCoverageMatch');
  }

  get extraGlobals(): ChainedSet<JestConfigChain> {
    return this.get('extraGlobals');
  }

  get collectCoverageFrom(): ChainedSet<JestConfigChain> {
    return this.get('collectCoverageFrom');
  }

  get coveragePathIgnorePatterns(): ChainedSet<JestConfigChain> {
    return this.get('coveragePathIgnorePatterns');
  }

  get coverageReporters(): ChainedSet<JestConfigChain> {
    return this.get('coverageReporters');
  }

  automock(value: boolean) {
    return this.set('automock', value);
  }

  bail(value: boolean | number) {
    return this.set('bail', value);
  }

  browser(value: boolean) {
    return this.set('browser', value);
  }

  cacheDirectory(value: string) {
    return this.set('cacheDirectory', value);
  }

  clearMocks(value: boolean) {
    return this.set('clearMocks', value);
  }

  collectCoverage(value: boolean) {
    return this.set('collectCoverage', value);
  }

  coverageDirectory(value: string) {
    return this.set('coverageDirectory', value);
  }

  coverageThreshold(value: CoverageThreshold) {
    return this.set('coverageThreshold', value);
  }

  dependencyExtractor(value: string) {
    return this.set('dependencyExtractor', value);
  }

  displayName(value: string | Record<string, string>) {
    return this.set('displayName', value);
  }

  errorOnDeprecated(value: boolean) {
    return this.set('errorOnDeprecated', value);
  }

  globals(value: Record<string, boolean>) {
    return this.set('globals', value);
  }

  notifyMode(
    value:
      | 'always'
      | 'failure'
      | 'success'
      | 'change'
      | 'success-change'
      | 'failure-change'
  ) {
    return this.set('notifyMode', value);
  }

  projects(value: ProjectConfig[]) {
    return this.set('projects', value);
  }

  reporters(value: Array<string | [string, Record<string, any>]>) {
    return this.set('reporters', value);
  }
}
