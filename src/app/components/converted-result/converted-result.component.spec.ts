import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertedResultComponent } from './converted-result.component';

describe('ConvertedResultComponent', () => {
  let component: ConvertedResultComponent;
  let fixture: ComponentFixture<ConvertedResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertedResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertedResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
