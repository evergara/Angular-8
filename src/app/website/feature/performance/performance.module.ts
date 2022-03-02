import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { PerformanceRoutingModule } from 'src/app/website/feature/performance/performance-routing.module';
import { PipePerformanceComponent } from 'src/app/website/feature/performance/components/pipe-performance/pipe-performance.component';
import { NotPerformanceComponent } from 'src/app/website/feature/performance/components/not-performance/not-performance.component';


@NgModule({
  declarations: [
    NotPerformanceComponent,
    PipePerformanceComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    FormsModule,
    SharedModule
  ],
})
export class PerformanceModule { }
