import axios from 'axios';
import {
  DeleteTaskType,
  GetByIdTaskType,
  GetTaskType,
  PatchRequestBody,
  PatchTaskType,
  PostTaskType,
  TaskResponseType,
} from 'types/apiTypes';
import { checkBoolean } from 'utils/index';

export const mapTask = (tasksFromResponse: GetTaskType): GetTaskType => {
  return tasksFromResponse.map((item) => ({
    ...item,
    name: item.name ? item.name.toString().slice(0, 20) : undefined,
    info: item.info ? item.info.toString().slice(0, 40) : undefined,
    isCompleted: checkBoolean(item.isCompleted),
    isImportant: checkBoolean(item.isImportant),
  }));
};

export const validTask = (taskFromResponse: TaskResponseType): TaskResponseType => {
  return {
    ...taskFromResponse,
    name: taskFromResponse.name ? taskFromResponse.name.toString().slice(0, 20) : undefined,
    info: taskFromResponse.info ? taskFromResponse.info.toString().slice(0, 40) : undefined,
    isCompleted: checkBoolean(taskFromResponse.isCompleted),
    isImportant: checkBoolean(taskFromResponse.isImportant),
  };
};

export const getTasksTyped = (
  isCompletedValue: boolean | null,
  name_likeValue: string | null,
  isImportantValue: boolean | null
): Promise<GetTaskType> =>
  axios
    .get('http://37.220.80.108/tasks', {
      params: {
        isCompleted: isCompletedValue ? true : null,
        name_like: name_likeValue || '',
        isImportant: isImportantValue ? true : null,
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
