import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangerDetailsComponent } from './currency-exchanger-details.component';

describe('CurrencyExchangerDetailsComponent', () => {
  let component: CurrencyExchangerDetailsComponent;
  let fixture: ComponentFixture<CurrencyExchangerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
