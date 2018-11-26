import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todos: Array<Todo> = [];
  public todo: Todo = new Todo("");

  constructor() { }

  ngOnInit() {//cuando se renderiza este componente
    this.todos.push(new Todo("Sacar la basura"));//la forma apropiada de añadir elementos en javascript
    this.todos.push(new Todo("Pasear a Aker")); 
    this.todos.push(new Todo("Comprar pan")); 
  }

}
