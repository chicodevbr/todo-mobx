import { FormEvent } from 'react';
import TodoStore from '../../stores/TodoStore';
import styles from './TodoInput.module.css';

const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formElement = e.target as HTMLFormElement;
    const formData = new FormData(formElement);
    const value = String(formData.get('todo-input') || '');

    todos.add(value);
    formElement.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles['todo-input-group']}>
      <input name="todo-input" placeholder="Add todo.." />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoInput;
