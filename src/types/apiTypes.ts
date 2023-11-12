import { paths } from './api';

export type GetTaskType = paths['/tasks']['get']['responses'][200]['content']['application/json'];
export type GetResponseType = paths['/tasks']['get']['responses'];
