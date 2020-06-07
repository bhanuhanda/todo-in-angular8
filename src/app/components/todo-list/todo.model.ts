export class Todo {
  constructor(
    public todoId: any,
    public todoLabel: any,
    public todoCompleted: boolean = false,
    public todoDeleted: boolean = false,
    public todoImportant: boolean = false
  ) {
    //   this.todoCompleted = false;
  }
}
