import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';

export const reducers = combineReducers({
  todos: todosReducer,
});

export type RootState = ReturnType<typeof reducers>;
