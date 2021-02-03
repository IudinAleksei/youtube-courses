import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})

export class TodosService {
  public todos: Todo[] = [];

  constructor(private http: HttpClient) {

  }

  fetchTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .pipe(tap(todos => {
        this.todos = todos;
        console.log(todos);
      }));
  }

  onToggle(id: number): void {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].completed = !this.todos[idx].completed;
  }

  removeTodo(id: number): void {
    this.todos = this.todos.filter( todo => todo.id !== id);
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
}
