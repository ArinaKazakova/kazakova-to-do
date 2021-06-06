import ActionTypes from '../types/todo';

const ACTIONS = {
  addToDoRequest: (payload) => ({
    type: ActionTypes.ADD_TODO_REQUEST,
    payload,
  }),
  addToDoSuccess: () => ({
    type: ActionTypes.ADD_TODO_SUCCESS,
  }),
  addToDoError: () => ({
    type: ActionTypes.ADD_TODO_ERROR,
  }),

  getToDoListRequest: () => ({
    type: ActionTypes.GET_TODO_LIST_REQUEST,
  }),
  getToDoListSuccess: (payload) => ({
    type: ActionTypes.GET_TODO_LIST_SUCCESS,
    payload,
  }),
  getToDoListError: () => ({
    type: ActionTypes.GET_TODO_LIST_ERROR,
  }),

  toggleToDoRequest: (payload) => ({
    type: ActionTypes.TOGGLE_TODO_REQUEST,
    payload,
  }),
  toggleToDoSuccess: () => ({
    type: ActionTypes.TOGGLE_TODO_SUCCESS,
  }),
  toggleToDoError: () => ({
    type: ActionTypes.TOGGLE_TODO_ERROR,
  }),

  deleteToDoRequest: (payload) => ({
    type: ActionTypes.DELETE_TODO_REQUEST,
    payload,
  }),
  deleteToDoSuccess: () => ({
    type: ActionTypes.DELETE_TODO_SUCCESS,
  }),
  deleteToDoError: () => ({
    type: ActionTypes.DELETE_TODO_ERROR,
  }),
};

export default ACTIONS;
