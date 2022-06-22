import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyExchangerContainerComponent } from './currency-exchanger-container.component';

describe('CurrencyExchangerContainerComponent', () => {
  let component: CurrencyExchangerContainerComponent;
  let fixture: ComponentFixture<CurrencyExchangerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyExchangerContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
