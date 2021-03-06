import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@material/material.module';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from '@auth/services/auth.service';
import { LogingComponent } from './components/loging/loging.component';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    LogingComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [AuthService],
})
export class AuthModule { }
