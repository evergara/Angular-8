import { Directive } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { TodoService } from '@feature/todo/service/todo.service';

@Directive({
  selector: '[isExistTask]'
})
export class TodoValidators {

  static isExistTask(service: TodoService) {
    return (control: AbstractControl) => {
      const title = control.value;
      return service.hasTodo(title).pipe(
        map(hasTodo => {
          if (hasTodo) {
            return { isExistTask: true };
          }
          return null;
        })
      );
    };
  }

}