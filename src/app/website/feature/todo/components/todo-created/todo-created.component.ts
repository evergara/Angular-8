import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from '@feature/todo/model/todo';

@Component({
  selector: 'app-todo-created',
  templateUrl: './todo-created.component.html',
  styleUrls: ['./todo-created.component.scss']
})
export class TodoCreatedComponent implements OnInit {
  
  //@ts-ignore
  private todo: Todo;
  private _titles: string;
  @Output() createdTodoEvent: EventEmitter<Todo> = new EventEmitter();

  constructor() {
    this._titles = '';
  }

  ngOnInit(): void {
  }
 
  public set title(title:string) {
     this._titles = title;
  }

  public get title() {
    return this._titles ;
  }

  createdTodo(): void{
    this.todo = {
      title: this._titles,
      id:2000,
      userId:1,
      completed:false
    }

    this.createdTodoEvent.emit(this.todo);
  }
}
