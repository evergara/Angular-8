import { Todo } from '@feature/todo/model/todo';

export interface EventEmitterTodo {
    todo: Todo;
    index: number;
}