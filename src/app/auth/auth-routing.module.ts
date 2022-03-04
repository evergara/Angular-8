import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogingComponent } from './components/loging/loging.component';
import { RegisterComponent } from './components/register/register.component';

const HOME_ROUTE = '/auth/login';
const routes: Routes = [
  { path: '', redirectTo: HOME_ROUTE, pathMatch: 'full'},
  {path: 'login', component: LogingComponent},
  {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
