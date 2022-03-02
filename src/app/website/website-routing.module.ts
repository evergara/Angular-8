import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';


const HOME_ROUTE = '/basic';
const routes: Routes = [
  { 
    path: '', component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: HOME_ROUTE,
        pathMatch: 'full'
      },
      {
        path: 'todo',
        loadChildren: () => import('@feature/todo/todo.module').then(mod => mod.TodoModule),
      },
      {
        path: 'basic',
        loadChildren: () => import('@feature/basic/basic.module').then(mod => mod.BasicModule),
      },
      {
        path: 'product',
        loadChildren: () => import('@feature/product/product.module').then(mod => mod.ProductModule),
      },
      {
        path: 'user',
        loadChildren: () => import('@feature/user/user.module').then(mod => mod.UserModule),
      },
      {
        path: 'userapi',
        loadChildren: () => import('@feature/user-api/user-api.module').then(mod => mod.UserApiModule),
      },
      {
        path: 'performance',
        loadChildren: () => import('@feature/performance/performance.module').then(mod => mod.PerformanceModule),
      },
      { 
        path: 'contact',
        loadChildren: () => import('@feature/contact/contact.module').then(mod => mod.ContactModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
