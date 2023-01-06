import { List } from "./redux/todoSlice";
export class Item {
  id: string;
  content: string;
  isDone: boolean;
  constructor({ id, content, isDone }: List) {
    this.id = id;
    this.content = content;
    this.isDone = isDone;
  }
  get isDoneFromList() {
    return this.isDone;
  }
  set isDoneFromList(value: boolean) {
    this.isDone = value;
  }
}
