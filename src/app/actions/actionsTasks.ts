import { GET_TASK_CONNECT, GET_TASK_FAILURE, GET_TASK_SUCCESS } from 'components/constants/reduxAxiosConstants';
import { getTasksTyped } from 'utils/axiosReq';
import { AppDispatch } from 'src/store';

export const getFetchTasks = () => async (dispatch: AppDispatch) => {
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
