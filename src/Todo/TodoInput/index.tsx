import { ChangeEvent, useState } from 'react';
import TodoStore from '../../stores/TodoStore';
import styles from './TodoInput.module.css';

const TodoInput = ({ todos }: { todos: TodoStore }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleButtonClick = () => {
    todos.add(newTodo);
    setNewTodo('');
  };

  return (
    <div className={styles['todo-input-group']}>
      <input value={newTodo} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
