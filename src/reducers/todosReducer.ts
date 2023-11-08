import { ADD_NEW_TODO, CHANGE_TODO, DELETE_TODO } from 'components/constants/reduxConstants';
import { todoListData } from 'components/mocks/tmpData';
import { Action, TodoState } from 'types/redux';

const defaultState: TodoState = {
  todosList: todoListData,
};

export const todosReducer = (state = defaultState, action: Action): TodoState => {
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
