import { GET_TASK_CONNECT, GET_TASK_FAILURE, GET_TASK_SUCCESS } from 'components/constants/reduxAxiosConstants';
import { TaskRequestType } from 'types/appTypes';
import { ActionGetAxios } from 'types/reduxAxios';

const initialState: TaskRequestType = {
  tasks: [],
  loading: false,
  error: null,
};

export const TasksReducer = (state = initialState, action: ActionGetAxios): TaskRequestType => {
  switch (action.type) {
    case GET_TASK_CONNECT:
      return { ...state, loading: true };
    case GET_TASK_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case GET_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
