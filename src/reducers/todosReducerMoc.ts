import { ADD_NEW_TODO, CHANGE_TODO, DELETE_TODO } from 'components/constants/reduxConstants';
import { todoListData } from 'mocks/tmpData';
import { ActionMoc, TodoState } from 'types/reduxMoc';

const defaultState: TodoState = {
  todosList: todoListData,
};

export const todosReducerMoc = (state = defaultState, action: ActionMoc): TodoState => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return { todosList: [...state.todosList, action.payload] };
    case CHANGE_TODO:
      return { todosList: action.payload };
    case DELETE_TODO:
      return { todosList: action.payload };
    default:
      return state;
  }
};
