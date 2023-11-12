import { deleteTaskTyped, getTasksTyped, mapTask } from 'api/api';
import {
  DELETE_TASK_CONNECT,
  DELETE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  GET_TASK_CONNECT,
  GET_TASK_FAILURE,
  GET_TASK_SUCCESS,
} from 'components/constants/reduxAxiosConstants';

import { AppDispatch } from 'src/store';

export const getFetchTasks =
  (completedSearch: boolean | null, nameLike: string | null, importantSearch: boolean | null) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: GET_TASK_CONNECT });
      const response = await getTasksTyped(completedSearch, nameLike, importantSearch);
      console.log(response);
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
