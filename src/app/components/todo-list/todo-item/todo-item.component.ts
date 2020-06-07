import { Component, OnInit, OnDestroy, Input } from "@angular/core";
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
  @Input() important;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    if (this.important) {
      this.todosSubscription = this.todoService.todosUpdated.subscribe(
        (todos: Todo[]) => {
          this.todos = todos.filter((todo) => {
            return todo.todoImportant;
          });
          //   console.log(this.todos);
        }
      );
      this.todos = this.todoService.getTodos().filter((todo) => {
        return todo.todoImportant;
      });
    } else {
      this.todosSubscription = this.todoService.todosUpdated.subscribe(
        (todos: Todo[]) => {
          this.todos = todos;
          //   console.log(this.todos);
        }
      );
      this.todos = this.todoService.getTodos();
    }
  }

  toggleCompleted(todo: Todo) {
    // const ind = this.todos.indexOf(todo.todoId);
    this.todoService.updateCompletionStatus(todo.todoId);
  }
  toggleImportant(todo) {
    this.todoService.toggleImportance(todo.todoId);
  }
  deleteTodo(todo) {
    //   const id = this.todos.indexOf(todo.todoId);
    this.todoService.deleteTodo(todo.todoId);
  }
  ngOnDestroy() {
    this.todosSubscription.unsubscribe();
  }
}
