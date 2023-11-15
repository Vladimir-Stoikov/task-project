import { GetTaskType, TaskResponseType } from './apiTypes';
import {
  DELETE_TASK_CONNECT,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  GETBYID_TASK_CONNECT,
  GETBYID_TASK_FAILURE,
  GETBYID_TASK_SUCCESS,
  GET_TASK_CONNECT,
  GET_TASK_FAILURE,
  GET_TASK_SUCCESS,
  PATCH_TASK_CONNECT,
  PATCH_TASK_FAILURE,
  PATCH_TASK_SUCCESS,
  POST_TASK_CONNECT,
  POST_TASK_FAILURE,
  POST_TASK_SUCCESS,
} from 'constants/reduxAxiosConstants';

// GET ACTIONS

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

// DELETE ACTIONS

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

// POST ACTIONS

type ActionPostTasksConnect = {
  type: typeof POST_TASK_CONNECT;
};

type ActionPostTasksSuccess = {
  type: typeof POST_TASK_SUCCESS;
};

type ActionPostTasksFailure = {
  type: typeof POST_TASK_FAILURE;
  payload: string;
};

// GET BY ID ACTIONS

type ActionGetByIdTasksConnect = {
  type: typeof GETBYID_TASK_CONNECT;
};

type ActionGetByIdTasksSuccess = {
  type: typeof GETBYID_TASK_SUCCESS;
  payload: TaskResponseType;
};

type ActionGetByIdTasksFailure = {
  type: typeof GETBYID_TASK_FAILURE;
  payload: string;
};

// PATCH ACTIONS

type ActionPatchTasksConnect = {
  type: typeof PATCH_TASK_CONNECT;
};

type ActionPatchTasksSuccess = {
  type: typeof PATCH_TASK_SUCCESS;
};

type ActionPatchTasksFailure = {
  type: typeof PATCH_TASK_FAILURE;
  payload: string;
};

export type ActionsAxios =
  | ActionGetTasksConnect
  | ActionGetTasksSuccess
  | ActionGetTasksFailure
  | ActionDeleteTasksConnect
  | ActionDeleteTasksSuccess
  | ActionDeleteTasksFailure
  | ActionPostTasksConnect
  | ActionPostTasksSuccess
  | ActionPostTasksFailure
  | ActionGetByIdTasksConnect
  | ActionGetByIdTasksSuccess
  | ActionGetByIdTasksFailure
  | ActionPatchTasksConnect
  | ActionPatchTasksSuccess
  | ActionPatchTasksFailure;
