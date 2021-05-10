import { all } from 'redux-saga/effects';

import categories from './categories';
import todo from './todo';

export default function* rootSaga() {
  yield all([categories(), todo()]);
}
