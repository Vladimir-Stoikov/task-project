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
import { TaskRequestType } from 'types/appTypes';
import { ActionsAxios } from 'types/reduxAxios';

const initialState: TaskRequestType = {
  tasks: [],
  loading: false,
  error: null,
  task: undefined,
};

export const TasksReducer = (state = initialState, action: ActionsAxios): TaskRequestType => {
  switch (action.type) {
    case GET_TASK_CONNECT:
      return { ...state, loading: true };
    case GET_TASK_SUCCESS:
      return { ...state, loading: false, tasks: action.payload };
    case GET_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case DELETE_TASK_CONNECT:
      return { ...state, loading: true };
    case DELETE_TASK_SUCCESS:
      return { ...state, loading: false };
    case DELETE_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case POST_TASK_CONNECT:
      return { ...state, loading: true };
    case POST_TASK_SUCCESS:
      return { ...state, loading: false };
    case POST_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case GETBYID_TASK_CONNECT:
      return { ...state, loading: true };
    case GETBYID_TASK_SUCCESS:
      return { ...state, loading: false, task: action.payload };
    case GETBYID_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    case PATCH_TASK_CONNECT:
      return { ...state, loading: true };
    case PATCH_TASK_SUCCESS:
      return { ...state, loading: false };
    case PATCH_TASK_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
