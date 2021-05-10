import { put, takeLatest, call } from 'redux-saga/effects';

import CategoriesActions from '../actions/categories';
import Actions from '../types/category';
import { sendData } from '../../api';

function* addCategoriesSaga({ payload }) {
  try {
    yield call(sendData, payload);
    yield put(CategoriesActions.addCategoriesSuccess());
  } catch (error) {
    yield put(CategoriesActions.addCategoriesError());
  }
}

function* watch() {
  yield takeLatest(Actions.ADD_CATEGORIES_REQUEST, addCategoriesSaga);
}

export default watch;
