import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ReversePipe } from './reverse.pipe';
import { NotPerformanceComponent } from './compoents/not-performance/not-performance.component';
import { PipePerformanceComponent } from './compoents/pipe-performance/pipe-performance.component';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { UserListApiComponent } from './components/user-list-api/user-list-api.component';
import { UserDetailApiComponent } from './components/user-detail-api/user-detail-api.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ReversePipe,
    NotPerformanceComponent,
    PipePerformanceComponent,
    FibonacciPipe,
    HighlightDirective,
    UserListComponent,
    UserComponent,
    UserListApiComponent,
    UserDetailApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
