import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangerWidgetsComponent } from './currency-exchanger-widgets.component';

describe('CurrencyExchangerWidgetsComponent', () => {
  let component: CurrencyExchangerWidgetsComponent;
  let fixture: ComponentFixture<CurrencyExchangerWidgetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangerWidgetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangerWidgetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
