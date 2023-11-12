import { GetTaskType } from './apiTypes';

export interface TaskRequestType {
  tasks: GetTaskType;
  loading: boolean;
  error: null | string;
}

export interface TaskType {
  name?: string;
  info?: string;
  isImportant?: boolean;
  isCompleted?: boolean;
  id?: number;
}
