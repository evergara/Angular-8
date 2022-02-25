import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPerformanceComponent } from './not-performance.component';

describe('NotPerformanceComponent', () => {
  let component: NotPerformanceComponent;
  let fixture: ComponentFixture<NotPerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotPerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotPerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
