import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { useEffect } from 'react';

const App = () => {
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    *toggleTodoVisibility() {
      this.loading = true;

      yield new Promise((resolve) => setTimeout(() => resolve(void 0), 500));

      this.loading = false;
      this.todosVisible = !appUI.todosVisible;
    },
  }));

  useEffect(() => {
    console.log({ loading: appUI.loading });
  }, [appUI.loading]);

  return (
    <div className="app">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        <h2 onClick={appUI.toggleTodoVisibility}>
          <span>{appUI.todosVisible ? '-' : '+'}</span>
          Todos
        </h2>
        {appUI.todosVisible && <TodoList />}
      </div>
    </div>
  );
};

export default observer(App);
