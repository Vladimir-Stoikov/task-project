import { paths } from './api';

export type GetTaskType = paths['/tasks']['get']['responses'][200]['content']['application/json'];

export type DeleteTaskType =
  paths['/tasks/{taskId}']['delete']['responses'][200]['content']['application/json; charset=utf-8'];

export type PostTaskType = paths['/tasks']['post']['responses'][200]['content']['application/json'];

export type GetByIdTaskType = paths['/tasks/{taskId}']['get']['responses'][200]['content']['application/json'];

export type PatchTaskType = paths['/tasks/{taskId}']['patch']['responses'][200]['content']['application/json'];

export type PatchRequestBody = Required<
  paths['/tasks/{taskId}']['patch']
>['requestBody']['content']['application/json'];

export type TaskResponseType = paths['/tasks/{taskId}']['get']['responses'][200]['content']['application/json'];

export type SearchRequestType = NonNullable<paths['/tasks']['get']['parameters']['query']>;
