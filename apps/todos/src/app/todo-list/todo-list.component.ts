import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../types';
import { Subscription } from 'rxjs';
import { TodoResolverService } from './todo-resolver.service';

@Component({
  selector: 'myproject-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoList: TodoItem[] = [];

  constructor(private service: TodoResolverService) {
  }

  ngOnInit(): void {
    const todos$ = this.service.getTodos();
    todos$.subscribe((data) => {
        this.todoList = data;
      }
    );
  }

}
