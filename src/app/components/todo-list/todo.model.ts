export class Todo {
  constructor(
    public todoLabel: any,
    public todoCompleted: boolean = false,
    public todoDeleted: boolean = false
  ) {
    //   this.todoCompleted = false;
  }
}
