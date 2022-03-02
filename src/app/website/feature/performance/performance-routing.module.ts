import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipePerformanceComponent } from './components/pipe-performance/pipe-performance.component';
import { NotPerformanceComponent } from '@feature/performance/components/not-performance/not-performance.component';

const routes: Routes = [
  { path: '', component: PipePerformanceComponent},
  { path: 'notperformance', component: NotPerformanceComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
