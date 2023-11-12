import { combineReducers } from 'redux';
import { TasksReducer } from './taskReducer';

export const reducers = combineReducers({
  task: TasksReducer,
});

export type RootState = ReturnType<typeof reducers>;
