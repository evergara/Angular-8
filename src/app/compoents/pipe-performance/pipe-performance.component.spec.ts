import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePerformanceComponent } from './pipe-performance.component';

describe('PipePerformanceComponent', () => {
  let component: PipePerformanceComponent;
  let fixture: ComponentFixture<PipePerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePerformanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
