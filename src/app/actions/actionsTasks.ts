import {
  deleteTaskTyped,
  getByIdTyped,
  getTasksTyped,
  mapTask,
  patchTaskTyped,
  postTaskTyped,
  validTask,
} from 'api/api';
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
} from 'components/constants/reduxAxiosConstants';

import { AppDispatch } from 'src/store';
import { TaskType } from 'types/appTypes';

export const getFetchTasks =
  (completedSearch: boolean | null, nameLike: string | null, importantSearch: boolean | null) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: GET_TASK_CONNECT });
      const response = await getTasksTyped(completedSearch, nameLike, importantSearch);
      const mappedResponse = mapTask(response);
      dispatch({ type: GET_TASK_SUCCESS, payload: mappedResponse });
    } catch (error) {
      dispatch({
        type: GET_TASK_FAILURE,
        payload: 'GET/Error loading tasks',
      });
    }
  };

export const deleteFetchTask = (id: number | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: DELETE_TASK_CONNECT });
    await deleteTaskTyped(id);
    dispatch({ type: DELETE_TASK_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_TASK_FAILURE,
      payload: 'DELETE/Error when deleting a task',
    });
  }
};

export const postFetchTask = (data: TaskType) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: POST_TASK_CONNECT });
    await postTaskTyped(data);
    dispatch({ type: POST_TASK_SUCCESS });
  } catch (error) {
    dispatch({
      type: POST_TASK_FAILURE,
      payload: 'POST/Error adding a task',
    });
  }
};

export const getByIdTask = (id: number | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: GETBYID_TASK_CONNECT });
    const response = await getByIdTyped(id);
    const validResponse = validTask(response);
    dispatch({ type: GETBYID_TASK_SUCCESS, payload: validResponse });
  } catch (error) {
    dispatch({
      type: GETBYID_TASK_FAILURE,
      payload: `GET/Error getting task №${id}`,
    });
  }
};

export const patchTask = (id: number | undefined, data: TaskType) => async (dispatch: AppDispatch) => {
  try {
    delete data.id;
    dispatch({ type: PATCH_TASK_CONNECT });
    await patchTaskTyped(id, data);
    dispatch({ type: PATCH_TASK_SUCCESS });
  } catch (error) {
    dispatch({
      type: PATCH_TASK_FAILURE,
      payload: `PATCH/Error when patching task №${id}`,
    });
  }
};
