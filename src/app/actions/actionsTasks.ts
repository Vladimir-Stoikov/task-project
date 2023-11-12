import axios from 'axios';
import { getTasksTyped } from 'api/api';
import { GET_TASK_CONNECT, GET_TASK_FAILURE, GET_TASK_SUCCESS } from 'components/constants/reduxAxiosConstants';

import { AppDispatch } from 'src/store';
import { GetTaskType } from 'types/apiTypes';

export const getFetchTasks = () => async (dispatch: AppDispatch) => {
  try {
    dispatch({ type: GET_TASK_CONNECT });
    const response = await getTasksTyped();
    console.log('В экшене', response);

    dispatch({ type: GET_TASK_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: GET_TASK_FAILURE,
      payload: 'GET Ошибка при загрузке задач',
    });
  }
};
