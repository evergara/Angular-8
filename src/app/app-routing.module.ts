import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page404Component } from '@shared/components/page404/page404.component';

const HOME_ROUTE = '/basic';
const routes: Routes = [
  { path: '', redirectTo: HOME_ROUTE, pathMatch: 'full' },
  /*{
    path: '',
    loadChildren: () => import('@feature/product/product.module').then(mod => mod.ProductModule),
  },**/
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
  { path: '**', 
    component: Page404Component
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
