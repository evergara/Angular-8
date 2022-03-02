import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '@feature/product/components/product-list/product-list.component';
import { ProdcutDetailComponent } from './components/prodcut-detail/prodcut-detail.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

const routes: Routes = [
  { path: '', component: ProductListComponent},
  { path: 'new', component: ProductFormComponent},
  { path: ':id', component: ProdcutDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
