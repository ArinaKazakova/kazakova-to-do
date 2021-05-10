import ActionTypes from '../types/category';

const ACTIONS = {
  addCategoriesRequest: (payload) => ({
    type: ActionTypes.ADD_CATEGORIES_REQUEST,
    payload,
  }),
  addCategoriesSuccess: () => ({
    type: ActionTypes.ADD_CATEGORIES_SUCCESS,
  }),
  addCategoriesError: () => ({
    type: ActionTypes.ADD_CATEGORIES_ERROR,
  }),

  getCategoriesListRequest: () => ({
    type: ActionTypes.GET_CATEGORIES_LIST_REQUEST,
  }),
  getCategoriesListSuccess: (payload) => ({
    type: ActionTypes.GET_CATEGORIES_LIST_SUCCESS,
    payload,
  }),
  getCategoriesListError: () => ({
    type: ActionTypes.GET_CATEGORIES_LIST_ERROR,
  }),

  deleteCategoriesRequest: (payload) => ({
    type: ActionTypes.DELETE_CATEGORIES_REQUEST,
    payload,
  }),
  deleteCategoriesSuccess: () => ({
    type: ActionTypes.DELETE_CATEGORIES_SUCCESS,
  }),
  deleteCategoriesError: () => ({
    type: ActionTypes.DELETE_CATEGORIES_ERROR,
  }),
};

export default ACTIONS;
