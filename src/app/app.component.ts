import { Component } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  complited: boolean;
  date?: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Angular todo aplication';

  public todos: Todo[] = [
    { id: 1, title: 'Buy bread', complited: false, date: new Date()},
    { id: 2, title: 'Buy meat', complited: true, date: new Date()},
    { id: 3, title: 'Buy eggs', complited: false, date: new Date()},
  ];
}
