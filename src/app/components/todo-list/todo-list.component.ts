import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { TodoService } from "./todo.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.css"],
})
export class TodoListComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit() {}

  enterTodo(form: NgForm) {
    // console.log(form.value.todoInput);
    this.todoService.addTodo(form.value.todoInput);
    form.reset();
  }
}
