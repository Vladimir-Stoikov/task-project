import { deleteTaskTyped, getByIdTyped, getTasksTyped, mapTask, patchTaskTyped, postTaskTyped } from 'api/api';
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
        payload: 'GET Ошибка при загрузке задач',
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
      payload: 'DELETE Ошибка при удалении задачи',
    });
  }
};

export const postFetchTask =
  (name: string, info: string, isImportant: boolean, isCompleted: boolean) => async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: POST_TASK_CONNECT });
      await postTaskTyped(name, info, isImportant, isCompleted);
      dispatch({ type: POST_TASK_SUCCESS });
    } catch (error) {
      dispatch({
        type: POST_TASK_FAILURE,
        payload: 'POST Ошибка при добавлении задачи',
      });
    }
  };

export const getByIdTask = (id: number | undefined) => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: GETBYID_TASK_CONNECT });
    const response = await getByIdTyped(id);
    dispatch({ type: GETBYID_TASK_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: GETBYID_TASK_FAILURE,
      payload: `GET Ошибка при получении задачии №${id}`,
    });
  }
};

export const patchTask =
  (id: number, name: string | undefined, info: string | undefined, isComplete: boolean, isImportan: boolean) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: PATCH_TASK_CONNECT });
      await patchTaskTyped(id, name, info, isComplete, isImportan);
      dispatch({ type: PATCH_TASK_SUCCESS });
    } catch (error) {
      dispatch({
        type: PATCH_TASK_FAILURE,
        payload: `PATCH Ошибка при изменении задачи №${id}`,
      });
    }
  };
