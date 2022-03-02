import { User } from './model/user';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { UserRoutingModule } from '@feature/user/user-routing.module';
import { UserListComponent } from '@feature/user/components/user-list/user-list.component';
import { UserComponent } from '@feature/user/components/user/user.component';
import { UsersService } from './service/users.service';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ],
  providers: [
    UsersService
  ]
})
export class UserModule { }
