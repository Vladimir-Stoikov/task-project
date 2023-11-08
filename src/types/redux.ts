import { ADD_NEW_TODO } from 'components/constants/reduxConstants';

export interface TodoType {
  id: number;
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

export type Action = ActionAdd;
