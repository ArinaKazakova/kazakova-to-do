import { put, takeLatest, call } from 'redux-saga/effects';

import TodoActions from '../actions/todo';
import Actions from '../types/todo';
import { sendData } from '../../api';

function* addTodoSaga({ payload }) {
  try {
    yield call(sendData, payload);
    yield put(TodoActions.addToDoSuccess());
  } catch (error) {
    yield put(TodoActions.addToDoError());
  }
}

function* watch() {
  yield takeLatest(Actions.ADD_TODO_REQUEST, addTodoSaga);
}

export default watch;
