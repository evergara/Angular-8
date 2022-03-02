
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '@feature/todo/model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  path = "https://jsonplaceholder.typicode.com/todos";
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(this.path);
  }
  
  add(todo: Todo){
    return this.http.post<Todo>(this.path, todo);
  }

  delete(id: number) {
    const url = `${this.path}/${id}`;
    return this.http.delete(url);
  }
  
  update(todo:Todo) {
    const url = `${this.path}/${todo.id}`;
    return this.http.put(url, todo);
  }
}
