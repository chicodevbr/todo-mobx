import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { observable, runInAction } from 'mobx';

const App = () => {
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    toggleTodoVisibility() {
      this.loading = true;

      new Promise((resolve) => setTimeout(() => resolve(void 0), 1000)).then(
        () => {
          runInAction(() => {
            this.loading = false;
            this.todosVisible = !appUI.todosVisible;
          });
        }
      );
    },
  }));

  const todosVisible = observable.box(true);
  todosVisible.observe_(({ newValue }) => {
    console.log('the new value is', newValue);
  });
  todosVisible.set(false);
  todosVisible.set(true);

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
