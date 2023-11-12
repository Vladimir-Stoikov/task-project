import { ADD_NEW_TODO, CHANGE_TODO, DELETE_TODO } from 'components/constants/reduxConstants';

export interface TodoType {
  id: number | string;
  name: string;
  description: string;
  isImportant: boolean;
  isComplete: boolean;
}

export interface TodoState {
  todosList: TodoType[];
}

interface ActionAdd {
  type: typeof ADD_NEW_TODO;
  payload: TodoType;
}

interface ActionChange {
  type: typeof CHANGE_TODO;
  payload: TodoType[];
}

interface ActionDelete {
  type: typeof DELETE_TODO;
  payload: TodoType[];
}

export type ActionMoc = ActionAdd | ActionChange | ActionDelete;
