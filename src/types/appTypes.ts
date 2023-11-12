import { GetTaskType } from './apiTypes';

export interface TaskRequestType {
  tasks: GetTaskType;
  loading: boolean;
  error: null | string;
}
