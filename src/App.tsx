import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { useLocalObservable, observer } from 'mobx-react-lite';
import TodoStore from './stores/TodoStore';
import { useStore } from './stores';

const App = observer(({ todos }: { todos: ReturnType<typeof TodoStore> }) => {
  const appUI = useLocalObservable(() => ({
    todosVisible: true,
    loading: false,
    toggleTodoVisibility() {
      this.todosVisible = !appUI.todosVisible;
    },
  }));

  return (
    <div className="app">
      <TodoInput />
      <div className={styles['todo-list-wrapper']}>
        <h2 onClick={appUI.toggleTodoVisibility}>
          <span>{appUI.todosVisible ? '-' : '+'}</span>
          Todos (unfinished {todos.unfinishedTodos.length})
        </h2>
        {appUI.todosVisible && <TodoList />}
      </div>
    </div>
  );
});

const AppWrapper = () => {
  const { todos } = useStore();

  return <App todos={todos} />;
};
export { App };
export default AppWrapper;
