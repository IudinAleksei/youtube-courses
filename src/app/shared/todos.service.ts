import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
export interface Todo {
  id: number;
  title: string;
  complited: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})

export class TodosService {
  public todos: Todo[] = [];

  constructor(private http: HttpClient) {

  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=3')
      .pipe(tap( todos => this.todos = todos));
  }

  onToggle(id: number): void {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].complited = !this.todos[idx].complited;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter( todo => todo.id !== id);
  }
}
