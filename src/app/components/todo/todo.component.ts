import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/todo';
import { TodoService } from 'src/app/services/todo.service';
import { EventEmitterTodo } from './../../model/eventemittertodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private todos: Todo[];

  constructor(private todoservice: TodoService) { 
    this.todos = [];
  }

  ngOnInit(): void {
    this.getAllTodo();
  }

  public get getTodos(): Todo[] {
    return this.todos
  }

  getAllTodo() {
    this.todoservice.getAll().subscribe(todos => {
      this.todos = todos;
    })
  }
  
  addTodo(todo: Todo): void {
    this.todoservice.add(todo).subscribe(
      todo => {
        console.log(todo);
        this.todos.unshift(todo);
      },
      error => {
        console.log(error);
      }
    );
  }

  updateTodo(todo: Todo): void {
    this.todoservice.update(todo).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteTodo(eventEmiterTodo: EventEmitterTodo): void {
    this.todoservice.delete(eventEmiterTodo.todo.id).subscribe(response => {
      console.log(response);
      this.todos.splice(eventEmiterTodo.index, 1);
    });
  }
  
  updatedTodo(eventEmiterTodo: EventEmitterTodo): void {
    this.todoservice.update(eventEmiterTodo.todo).subscribe(response => {
      console.log(response);
    });
  }
}
