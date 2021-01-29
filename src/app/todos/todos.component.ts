import { Component, OnInit} from '@angular/core';
import { TodosService } from '../shared/todos.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  onChange(id: number): void {
    this.todosService.onToggle(id);
  }

}
