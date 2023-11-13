import axios from 'axios';
import { DeleteTaskType, GetTaskType, PostTaskType } from 'types/apiTypes';

export const mapTask = (taskFromResponse: GetTaskType): GetTaskType => {
  return taskFromResponse.map((item) => ({
    ...item,
    name: item.name ? item.name.slice(0, 21) : undefined,
    info: item.info || undefined,
    isCompleted: Boolean(item.isCompleted) || false,
    isImportant: Boolean(item.isImportant) || false,
  }));
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
    .then((response) => response.data);

export const deleteTaskTyped = (id: number | undefined): Promise<DeleteTaskType> =>
  axios.delete(`http://37.220.80.108/tasks/${id}`);

export const postTaskTyped = (
  name: string,
  info: string,
  isImportant: boolean,
  isCompleted: boolean
): Promise<PostTaskType> =>
  axios.post('http://37.220.80.108/tasks', {
    name: name,
    info: info,
    isImportant: isImportant,
    isCompleted: isCompleted,
  });
