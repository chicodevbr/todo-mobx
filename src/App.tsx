import TodoInput from './Todo/TodoInput';
import TodoList from './Todo/TodoList';
import styles from './App.module.css';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { useStore } from './stores';
import { useEffect } from 'react';
import { reaction } from 'mobx';

const App = () => {
  const { todos } = useStore();

  useEffect(() => {
    const disposeReaction = reaction(
      () => {
        return {
          length: todos.list.length,
          unfinishedTodos: todos.unfinishedTodos,
        };
      },
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
        throw new Error('custom error');
      },
      {
        delay: 500,
        onError: (err) => console.log(err.message),
      }
    );

    return () => {
      disposeReaction();
    };
  }, [todos.list]);

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
};

export default observer(App);
