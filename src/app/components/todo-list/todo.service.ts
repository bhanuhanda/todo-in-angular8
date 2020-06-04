import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "./todo.model";

@Injectable({
  providedIn: "root",
})
export class TodoService {
  todos: Todo[] = [];
  todosUpdated = new Subject<any[]>();
  constructor() {}
  addTodo = (todoLabel: any) => {
    const todo = new Todo(todoLabel);
    this.todos.push(todo);
    // console.log(this.todos.slice());
    this.todosUpdated.next(this.todos.slice());
  };
  getTodos = () => {
    return this.todos.slice();
  };
  updateCompletionStatus = (index) => {
    this.todos[index].todoCompleted = !this.todos[index].todoCompleted;
    this.todosUpdated.next(this.todos.slice());
  };
  deleteTodo = (index) => {
    this.todos[index].todoDeleted = true;
    this.todosUpdated.next(this.todos.slice());

    setTimeout(() => {
      this.todos.splice(index, 1);
      this.todosUpdated.next(this.todos.slice());
    }, 300);
  };
}
