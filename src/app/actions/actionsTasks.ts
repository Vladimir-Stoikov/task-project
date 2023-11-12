import { Dispatch } from 'redux';
import { GET_TASK_CONNECT, GET_TASK_FAILURE, GET_TASK_SUCCESS } from 'components/constants/reduxAxiosConstants';
import { ActionGetAxios } from 'types/reduxAxios';
import { getTasksTyped } from 'utils/axiosReq';

export const getFetchTasks = () => {
  return async (dispatch: Dispatch<ActionGetAxios>) => {
    try {
      dispatch({ type: GET_TASK_CONNECT });
      const response = await getTasksTyped();
      setTimeout(() => {
        console.log(response);
        dispatch({ type: GET_TASK_SUCCESS, payload: response });
      }, 2000);
    } catch (error) {
      dispatch({
        type: GET_TASK_FAILURE,
        payload: 'GET Ошибка при загрузке задач',
      });
    }
  };
};
