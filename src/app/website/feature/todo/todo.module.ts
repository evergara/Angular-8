import { TodoCreatedComponent } from './components/todo-created/todo-created.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { TodoComponent } from '@feature/todo/components/todo/todo.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from '@feature/todo/todo-routing.module';
import { TodoService } from './service/todo.service';


@NgModule({
  declarations: [
    TodoComponent, 
    TodoDetailComponent, 
    TodoListComponent,
    TodoCreatedComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TodoService
  ]
})
export class TodoModule { }
