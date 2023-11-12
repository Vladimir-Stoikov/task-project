import { GetTaskType } from './apiTypes';
import { GET_TASK_CONNECT, GET_TASK_FAILURE, GET_TASK_SUCCESS } from 'components/constants/reduxAxiosConstants';

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

export type ActionGetAxios = ActionGetTasksConnect | ActionGetTasksSuccess | ActionGetTasksFailure;
