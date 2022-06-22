import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalDetailsComponent } from './historical-details.component';

describe('HistoricalDetailsComponent', () => {
  let component: HistoricalDetailsComponent;
  let fixture: ComponentFixture<HistoricalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
