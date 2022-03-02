import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserApiRoutingModule } from './user-api-routing.module';
import { UserListApiComponent } from './components/user-list-api/user-list-api.component';
import { UserDetailApiComponent } from './components/user-detail-api/user-detail-api.component';
import { UsersApiService } from './service/users-api.service';



@NgModule({
  declarations: [
    UserListApiComponent,
    UserDetailApiComponent
  ],
  imports: [
    CommonModule,
    UserApiRoutingModule
  ],
  providers: [
    UsersApiService
  ]
})
export class UserApiModule { }
