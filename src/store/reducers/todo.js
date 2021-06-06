import ActionTypes from '../types/todo';

const INITIAL_STATE = {
  todoList: [],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_TODO_LIST_SUCCESS:
      return { ...state, todoList: action.payoad };
    default:
      return state;
  }
};

export default todoReducer;
