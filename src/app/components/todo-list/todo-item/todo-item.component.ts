import { Component, OnInit, OnDestroy } from "@angular/core";
import { TodoService } from "../todo.service";
import { Subscription } from "rxjs";
import { Todo } from "../todo.model";
@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit, OnDestroy {
  todos: Todo[];
  todosSubscription: Subscription;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todosSubscription = this.todoService.todosUpdated.subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        // console.log(this.todos);
      }
    );
    // this.todos = this.todoService.getTodos();
  }
  toggleCompleted(todo: Todo) {
    const ind = this.todos.indexOf(todo);
    // console.log(ind);
    this.todoService.updateCompletionStatus(ind);
  }
  deleteTodo(todo) {
    const ind = this.todos.indexOf(todo);
    this.todoService.deleteTodo(ind);
  }
  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
