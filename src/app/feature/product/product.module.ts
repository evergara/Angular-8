import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '@feature/product/components/product/product.component';
import { ProductListComponent } from '@feature/product/components/product-list/product-list.component';
import { ProdcutDetailComponent } from '@feature/product/components/prodcut-detail/prodcut-detail.component';
import { ProductService } from '@feature/product/shared/services/product.service';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { MaterialModule } from '@material/material.module';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProdcutDetailComponent,
    ProductFormComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
