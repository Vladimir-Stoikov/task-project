import axios from 'axios';
import { DeleteTaskType, GetTaskType } from 'types/apiTypes';

export const getTasksTyped = (): Promise<GetTaskType> =>
  axios.get('http://37.220.80.108/tasks').then((response) => response.data);

export const deleteTaskTyped = (id: number | undefined): Promise<DeleteTaskType> =>
  axios.delete(`http://37.220.80.108/tasks/${id}`);
