import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import createRootReducer from './reducers/index';
import rootSaga from './saga';

const configureStore = (preloadedState) => {
  const sagaMiddleware = createSagaMiddleware();
  const composedEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

  const store = createStore(createRootReducer(), preloadedState, composedEnhancers);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
