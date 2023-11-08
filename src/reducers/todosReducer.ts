import { ADD_NEW_TODO } from 'components/constants/reduxConstants';
import { todoListData } from 'components/data/tmpData';
import { Action, TodoState } from 'types/redux';

const defaultState: TodoState = {
  todosList: todoListData,
};

export const todosReducer = (state = defaultState, action: Action): TodoState => {
  switch (action.type) {
    case ADD_NEW_TODO:
      return { todosList: [...state.todosList, action.payload] };

    default:
      return state;
  }
};
