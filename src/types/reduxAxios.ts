import { GetTaskType } from './apiTypes';
import {
  DELETE_TASK_CONNECT,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  GET_TASK_CONNECT,
  GET_TASK_FAILURE,
  GET_TASK_SUCCESS,
} from 'components/constants/reduxAxiosConstants';

type ActionGetTasksConnect = {
  type: typeof GET_TASK_CONNECT;
};

type ActionGetTasksSuccess = {
  type: typeof GET_TASK_SUCCESS;
  payload: GetTaskType;
};

type ActionGetTasksFailure = {
  type: typeof GET_TASK_FAILURE;
  payload: string;
};

type ActionDeleteTasksConnect = {
  type: typeof DELETE_TASK_CONNECT;
};

type ActionDeleteTasksSuccess = {
  type: typeof DELETE_TASK_SUCCESS;
};

type ActionDeleteTasksFailure = {
  type: typeof DELETE_TASK_FAILURE;
  payload: string;
};

export type ActionsAxios =
  | ActionGetTasksConnect
  | ActionGetTasksSuccess
  | ActionGetTasksFailure
  | ActionDeleteTasksConnect
  | ActionDeleteTasksSuccess
  | ActionDeleteTasksFailure;
