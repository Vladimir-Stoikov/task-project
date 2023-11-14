import { Dispatch, SetStateAction } from 'react';
import { GetTaskType, TaskResponseType } from './apiTypes';

export interface TaskRequestType {
  tasks: GetTaskType;
  loading: boolean;
  error: null | string;
  task: Partial<TaskResponseType> | undefined;
}

export interface TaskPropsType {
  id: number | undefined;
  name: string | undefined;
  info: string | undefined;
  isCompleted: boolean | undefined;
  isImportant: boolean | undefined;
  reRender: Dispatch<SetStateAction<boolean>>;
}
