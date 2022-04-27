import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { runInAction } from 'mobx';

const App = () => {
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    async toggleTodoVisibility() {
      this.loading = true;

      await new Promise((resolve) => setTimeout(() => resolve(void 0), 500));

      runInAction(() => {
        this.loading = false;
        this.todosVisible = !appUI.todosVisible;
      });
    },
  }));

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
