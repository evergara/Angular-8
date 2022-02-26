import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from './../../model/todo';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {
  //@ts-ignore
  private todo: Todo;
  @Output() deleteEventTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() updatedEventTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  @Input() public set setTodo(todo: Todo) {
    this.todo = todo;
  }

  public get getTodo(): Todo {
     return this.todo;
  }

  deleteTodo(): void {
    this.deleteEventTodo.emit(this.getTodo);
  }
  
  updatedTodo(): void {
    this.updatedEventTodo.emit(this.getTodo);
  }
}
