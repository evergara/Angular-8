import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicRoutingModule } from '@feature/basic/basic-routing.module';
import { BasicComponent } from '@feature/basic/components/basic/basic.component';


@NgModule({
  declarations: [
    BasicComponent
  ],
  imports: [
    CommonModule,
    BasicRoutingModule,
    FormsModule
  ]
})
export class BasicModule { }
