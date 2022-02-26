import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailApiComponent } from './user-detail-api.component';

describe('UserDetailApiComponent', () => {
  let component: UserDetailApiComponent;
  let fixture: ComponentFixture<UserDetailApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
