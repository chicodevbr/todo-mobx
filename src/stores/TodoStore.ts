import { action, makeObservable, observable } from 'mobx';

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

class TodoStore {
  @observable
  list: Todo[] = [];

  constructor() {
    makeObservable(this);
  }

  @action
  add(title: string) {
    if (title.length < 3) {
      return;
    }

    this.list.push({
      id: Date.now(),
      title,
      isDone: false,
    });
  }

  @action
  toggle(todo: Todo) {
    todo.isDone = !todo.isDone;
  }

  @action
  remove(todo: Todo) {
    this.list = this.list.filter((t) => t.id !== todo.id);
  }
}

export default TodoStore;
