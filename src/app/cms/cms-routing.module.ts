import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductformComponent } from './components/productform/productform.component';
import { ProductTableComponent } from './components/product-table/product-table.component';

const HOME_ROUTE = '/cms/dashboard';
const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        redirectTo: HOME_ROUTE,
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'products/new',
        component: ProductformComponent
      },
      {
        path: 'products',
        component: ProductTableComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmsRoutingModule { }
