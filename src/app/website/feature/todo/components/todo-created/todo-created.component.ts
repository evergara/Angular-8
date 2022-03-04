import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '@feature/todo/model/todo';
import { TodoService } from '@feature/todo/service/todo.service';
import { TodoValidators } from '@shared/validators/validatorsAsyn';

@Component({
  selector: 'app-todo-created',
  templateUrl: './todo-created.component.html',
  styleUrls: ['./todo-created.component.scss']
})
export class TodoCreatedComponent implements OnInit {
  
  //@ts-ignore
  private todo: Todo;
  fieldTitle: FormControl;

  @Output() createdTodoEvent: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {
    this.fieldTitle = new FormControl(
      null, // value
      [Validators.minLength(3)], // sync
      [TodoValidators.isExistTask(this.todoService)]
    );
  }

  ngOnInit(): void {
  }
 
  public set title(title: FormControl) {
     this.fieldTitle = title;
  }

  public get title() {
    return this.fieldTitle.value ;
  }

  createdTodo(): void{
    if (this.fieldTitle.valid) {
      this.todo = {
        title: this.fieldTitle.value,
        id:2000,
        userId:1,
        completed:false
      }
      this.createdTodoEvent.emit(this.todo);
    }
  
  }
}
