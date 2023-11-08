import { ADD_NEW_TODO, CHANGE_TODO, DELETE_TODO } from 'components/constants/reduxConstants';
import { TodoType } from 'types/appTypes';

export function addTodo(todo: TodoType) {
  return { type: ADD_NEW_TODO, payload: todo };
}

export function changeTodo(newTodoArray: TodoType[]) {
  return { type: CHANGE_TODO, payload: newTodoArray };
}

export function deleteTodo(newTodoArray: TodoType[]) {
  return { type: DELETE_TODO, payload: newTodoArray };
}
