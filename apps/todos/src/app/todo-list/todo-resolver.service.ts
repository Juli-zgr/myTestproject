import { Injectable } from '@angular/core';
import { TodoItem } from '../types';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TodoResolverService {
  todos: TodoItem[] = [];
  todoSubject$ = new Subject<TodoItem[]>();

  addTodo(todo: TodoItem) {
    this.todos.push(todo);
    this.todoSubject$.next(this.todos);
  }

  getTodos(): Observable<TodoItem[]> {
    return this.todoSubject$.asObservable();
  }
}
