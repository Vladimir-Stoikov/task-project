import { Dispatch, SetStateAction } from 'react';
import { GetTaskType } from './apiTypes';

export interface TaskType {
  name?: string;
  info?: string;
  isImportant?: boolean;
  isCompleted?: boolean;
  id?: number;
}

export interface TaskRequestType {
  tasks: GetTaskType;
  loading: boolean;
  error: null | string;
  task: Partial<TaskType> | undefined;
}

export interface TaskPropsType {
  id: number | undefined;
  name: string | undefined;
  info: string | undefined;
  isCompleted: boolean | undefined;
  isImportant: boolean | undefined;
  reRender: Dispatch<SetStateAction<boolean>>;
}

export type TaskSubmitFormType = {
  name: string;
  info: string;
  isImportant: boolean;
  isCompleted: boolean;
};
