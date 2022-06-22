import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangerFilterComponent } from './currency-exchanger-filter.component';

describe('CurrencyExchangerFilterComponent', () => {
  let component: CurrencyExchangerFilterComponent;
  let fixture: ComponentFixture<CurrencyExchangerFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangerFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangerFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
