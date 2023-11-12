import axios from 'axios';
import { GetTaskType } from 'types/apiTypes';

export const getTasksTyped = (): Promise<GetTaskType> => axios.get('http://37.220.80.108');
