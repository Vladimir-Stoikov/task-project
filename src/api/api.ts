import axios from 'axios';
import {
  DeleteTaskType,
  GetByIdTaskType,
  GetTaskType,
  PatchRequestBody,
  PatchTaskType,
  PostTaskType,
  TaskResponseType,
  SearchRequestType,
} from 'types/apiTypes';
import { checkBoolean } from 'utils/index';

export const mapTask = (tasksFromResponse: GetTaskType): GetTaskType => {
  return tasksFromResponse.map((item) => ({
    ...item,
    name: item.name ? item.name.toString().slice(0, 20) : 'Not valid Name',
    info: item.info ? item.info.toString().slice(0, 40) : 'Not valid Info',
    isCompleted: checkBoolean(item.isCompleted),
    isImportant: checkBoolean(item.isImportant),
  }));
};

export const validTask = (taskFromResponse: TaskResponseType): TaskResponseType => {
  return {
    ...taskFromResponse,
    name: taskFromResponse.name ? taskFromResponse.name.toString().slice(0, 20) : 'Not valid Name',
    info: taskFromResponse.info ? taskFromResponse.info.toString().slice(0, 40) : 'Not valid Info',
    isCompleted: checkBoolean(taskFromResponse.isCompleted),
    isImportant: checkBoolean(taskFromResponse.isImportant),
  };
};

export const getTasksTyped = (data: SearchRequestType): Promise<GetTaskType> =>
  axios
    .get('http://37.220.80.108/tasks', {
      params: {
        ...data,
      },
    })
    .then((response) => response.data.reverse());

export const deleteTaskTyped = (id: number | undefined): Promise<DeleteTaskType> =>
  axios.delete(`http://37.220.80.108/tasks/${id}`);

export const postTaskTyped = (data: TaskResponseType): Promise<PostTaskType> =>
  axios.post('http://37.220.80.108/tasks', { ...data });

export const getByIdTyped = (id: number | undefined): Promise<GetByIdTaskType> =>
  axios.get(`http://37.220.80.108/tasks/${id}`).then((response) => response.data);

export const patchTaskTyped = (id: number | undefined, data: PatchRequestBody): Promise<PatchTaskType> =>
  axios.patch(`http://37.220.80.108/tasks/${id}`, {
    ...data,
  });
