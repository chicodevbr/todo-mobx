import { createContext, useContext } from 'react';
import TodoStore from './TodoStore';

const store = {
  todos: new TodoStore(),
};

export const StoreContext = createContext(store);

export const useStore = () => {
  return useContext(StoreContext) as typeof store;
};

export default store;
