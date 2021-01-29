import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  complited: boolean;
  date?: any;
}

@Injectable({providedIn: 'root'})

export class TodosService {
  public todos: Todo[] = [
    { id: 1, title: 'Buy bread', complited: false, date: new Date()},
    { id: 2, title: 'Buy meat', complited: true, date: new Date()},
    { id: 3, title: 'Buy eggs', complited: false, date: new Date()},
  ];

  onToggle(id: number): void {
    const idx = this.todos.findIndex(todo => todo.id === id);
    this.todos[idx].complited = !this.todos[idx].complited;
  }
}
