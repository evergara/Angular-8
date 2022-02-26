import { EventEmitterTodo } from './../../model/eventemittertodo';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from './../../model/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  private todos: Todo[];
  @Output() deleteTodoEvent: EventEmitter<EventEmitterTodo> = new EventEmitter();
  @Output() updatedTodoEvent: EventEmitter<EventEmitterTodo> = new EventEmitter();

  constructor() { 
    this.todos = [];
  }

  ngOnInit(): void {

  }

  public get getTodos(): Todo[] {
    return this.todos
  }

  @Input() public set setTodos(todos: Todo[]) {
    this.todos = todos;
  }

  deleteTodo(todo: Todo, index: number): void {
    this.deleteTodoEvent.emit({todo:todo, index:index});
  }

  updatedTodo(todo: Todo, index: number): void {
   this.updatedTodoEvent.emit({todo:todo, index:index});
 }
}
