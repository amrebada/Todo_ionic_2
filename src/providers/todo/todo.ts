import {HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TodoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TodoProvider {
  
  public todos = [];
  public ArchivedTodos = [];


  constructor(public http: HttpClient) {
    console.log('Hello TodoProvider Provider');
  }

  public archiveTodo(index){
    let todoArchived = this.todos[index];
    this.todos.splice(index,1);
    this.ArchivedTodos.push(todoArchived);
  }

  public getTodos(){
    return this.todos;
  }

  public getArchivedTodos(){
    return this.ArchivedTodos;
  }

  public addTodo(todo){
    this.todos.push(todo);
  }
}
