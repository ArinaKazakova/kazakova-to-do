import { combineReducers } from 'redux';

import todo from './todo';
import categories from './categories';

const createRootReducer = () =>
  combineReducers({
    todo,
    categories,
  });

export default createRootReducer;
