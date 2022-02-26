import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListApiComponent } from './user-list-api.component';

describe('UserListApiComponent', () => {
  let component: UserListApiComponent;
  let fixture: ComponentFixture<UserListApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
