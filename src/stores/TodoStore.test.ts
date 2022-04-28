import TodoStore from './TodoStore';

let todos = TodoStore();

describe('TodoList', () => {
  beforeEach(() => {
    todos = TodoStore();
  });

  it('add todos', () => {
    todos.add('My Todo');

    expect(todos.list.length).toBe(1);
    expect(todos.list.find((t) => t.title === 'My Todo')).toBeDefined();
  });

  it('removes a todo', () => {
    todos.add('Test');

    todos.remove(todos.list[0]);

    expect(todos.list.length).toBe(0);
  });

  it('togle a todos', () => {
    todos.add('Test');

    todos.toggle(todos.list[0]);

    expect(todos.list[0].isDone).toBe(true);
    expect(todos.unfinishedTodos.length).toBe(0);
  });

  it('has unfinished todos', () => {
    todos.add('Test');

    expect(todos.unfinishedTodos.length).toBe(1);
  });

  it('cannot add an empty todo', () => {
    todos.add('');

    expect(todos.list.length).toBe(0);
  });

  it('cannot add a todo with less than 3 characters', () => {
    todos.add('12');

    expect(todos.list.length).toBe(0);
  });

  it('can add a todo with at least 3 characters', () => {
    todos.add('123');

    expect(todos.list.length).toBe(1);
  });
});
