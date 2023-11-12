import { GetTaskType } from './apiTypes';

export interface TodoType {
  id: number | string;
  name: string;
  description: string;
  isImportant: boolean;
  isComplete: boolean;
}

// export type TaskType = {
//   id: number | string;
//   name: string;
//   description: string;
//   isImportant: boolean;
//   isComplete: boolean;
// };

export interface TaskRequestType {
  tasks: GetTaskType;
  loading: boolean;
  error: null | string;
}
