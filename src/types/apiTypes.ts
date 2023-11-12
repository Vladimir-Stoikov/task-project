import { paths } from './api';

// export type GetResponseType = paths['/tasks']['get']['responses'];
export type GetTaskType = paths['/tasks']['get']['responses'][200]['content']['application/json'];
export type DeleteTaskType =
  paths['/tasks/{taskId}']['delete']['responses'][200]['content']['application/json; charset=utf-8'];
