import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { TodoListComponent } from "./components/todo-list/todo-list.component";
import { TodoItemComponent } from "./components/todo-list/todo-item/todo-item.component";
import { TodoImportantComponent } from "./components/todo-list/todo-important/todo-important.component";

const appRoutes: Routes = [
  {
    path: "",
    component: TodoListComponent,
    pathMatch: "full",
  },
  {
    path: "important",
    component: TodoImportantComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoImportantComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
