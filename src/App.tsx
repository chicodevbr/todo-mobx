import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { useState } from 'react';

const App = () => {
  const [todosVisible, setTodosVisible] = useState(true);

  const handleClick = () => setTodosVisible((state) => !state);

  return (
    <div className="app">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        <h2 onClick={handleClick}>
          <span>{todosVisible ? '-' : '+'}</span>
          Todos
        </h2>
      </div>
      {todosVisible && <TodoList />}
    </div>
  );
};

export default App;
