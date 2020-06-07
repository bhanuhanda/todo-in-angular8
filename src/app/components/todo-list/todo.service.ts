import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "./todo.model";
import { v4 as uuidv4 } from "uuid";
@Injectable({
  providedIn: "root",
})
export class TodoService {
  todos: Todo[] = [];
  todosUpdated = new Subject<any[]>();
  constructor() {}
  addTodo = (todoLabel: any) => {
    const todo = new Todo(uuidv4(), todoLabel);
    this.todos.push(todo);
    // console.log(this.todos.slice());
    this.todosUpdated.next(this.todos.slice());
  };
  getTodos = () => {
    return this.todos.slice();
  };
  updateCompletionStatus = (id) => {
    // this.todos[index].todoCompleted = !this.todos[index].todoCompleted;
    // console.log("index = ", this.todos.indexOf(id));
    this.todos.forEach((todo) => {
      if (todo.todoId === id) {
        const ind = this.todos.indexOf(todo);
        this.todos[ind].todoCompleted = !this.todos[ind].todoCompleted;
      }
    });
    this.todosUpdated.next(this.todos.slice());
  };
  toggleImportance(id) {
    this.todos.forEach((todo) => {
      if (todo.todoId === id) {
        const ind = this.todos.indexOf(todo);
        this.todos[ind].todoImportant = !this.todos[ind].todoImportant;
      }
    });
    this.todosUpdated.next(this.todos.slice());
  }
  deleteTodo = (id) => {
    let deleteIndex;
    this.todos.forEach((todo) => {
      if (todo.todoId === id) {
        const ind = this.todos.indexOf(todo);
        deleteIndex = ind;
        this.todos[ind].todoDeleted = !this.todos[ind].todoDeleted;
      }
    });
    this.todosUpdated.next(this.todos.slice());

    setTimeout(() => {
      this.todos.splice(deleteIndex, 1);
      this.todosUpdated.next(this.todos.slice());
    }, 300);
  };
}
