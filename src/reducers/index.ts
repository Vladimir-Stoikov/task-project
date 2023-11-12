import { combineReducers } from 'redux';
import { todosReducerMoc } from './todosReducerMoc';
import { TasksReducer } from './taskReducer';

export const reducers = combineReducers({
  todos: todosReducerMoc,
  task: TasksReducer,
});

export type RootState = ReturnType<typeof reducers>;
