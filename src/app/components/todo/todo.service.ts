import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoService {

  readonly API = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http: HttpClient) { }

  getTodos() {
    return this.http.get<Todo[]>(`${this.API}`)
  }

}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
