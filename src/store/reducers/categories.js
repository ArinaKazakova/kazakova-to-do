import ActionTypes from '../types/category';

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_CATEGORIES_LIST_SUCCESS:
      return { ...state, categories: action.payoad };
    default:
      return state;
  }
};

export default categoriesReducer;
