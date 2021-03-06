import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CmsRoutingModule } from './cms-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';
import { ProductformComponent } from './components/productform/productform.component';
import { MaterialModule } from '@material/material.module';
import { ProductTableComponent } from './components/product-table/product-table.component';

@NgModule({
  declarations: [DashboardComponent, NavComponent, ProductformComponent, ProductTableComponent],
  imports: [
    CommonModule,
    CmsRoutingModule,
    LayoutModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class CmsModule { }
