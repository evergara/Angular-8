import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListApiComponent } from './components/user-list-api/user-list-api.component';

const routes: Routes = [
  { path: '', component: UserListApiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserApiRoutingModule { }
