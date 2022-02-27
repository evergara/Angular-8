import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciPipe } from '@shared/pipes/fibonacci.pipe';
import { HighlightDirective } from '@shared/directives/highlight.directive';
import { ReversePipe } from '@shared/pipes/reverse.pipe';
import { Page404Component } from '@shared/components/page404/page404.component';

@NgModule({
  declarations: [
    FibonacciPipe,
    HighlightDirective,
    ReversePipe,
    Page404Component,
  ],
  exports: [
    FibonacciPipe,
    HighlightDirective,
    ReversePipe, 
    Page404Component,
  ],
  imports: [
    CommonModule,
  ]
})
export class SharedModule { }
