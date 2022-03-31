import { Todo, TodoService } from './todo.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})
export class TodoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  subscriptions: Subscription[] = [];
  todos:Todo[] = [];

  ngOnInit() {
    this.todoService.getTodos().subscribe({
      next: todos => {
        console.log(todos)
        this.todos = todos
      },
      error: err => {
        console.log(err)
      }
    })
  }

  ngOnDestroy(){
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

}
