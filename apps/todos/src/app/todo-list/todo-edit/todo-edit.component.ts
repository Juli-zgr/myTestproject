import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TodoItem } from '../../types';
import { TodoResolverService } from '../todo-resolver.service';

@Component({
  selector: 'myproject-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(private service: TodoResolverService) {
  }

  ngOnInit(): void {
    this.todoForm = new FormGroup({
      todoName: new FormControl(''),
      todoTime: new FormControl(''),
      todoImportance: new FormControl('')
    });
  }

  onSubmit() {
    const newTodo: TodoItem = new TodoItem(
      this.todoForm.value['todoName'],
      this.todoForm.value['todoTime'],
      this.todoForm.value['todoImportance']
    );
    this.todoForm.reset();
    this.service.addTodo(newTodo);
  }

}
