import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '@feature/product/components/product/product.component';
import { ProductListComponent } from '@feature/product/components/product-list/product-list.component';
import { ProdcutDetailComponent } from '@feature/product/components/prodcut-detail/prodcut-detail.component';
import { ProductService } from '@feature/product/shared/services/product.service';


@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProdcutDetailComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
