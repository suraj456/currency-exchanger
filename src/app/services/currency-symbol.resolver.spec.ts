import { TestBed } from '@angular/core/testing';

import { CurrencySymbolResolver } from './currency-symbol.resolver';

describe('CurrencySymbolResolver', () => {
  let resolver: CurrencySymbolResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(CurrencySymbolResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
