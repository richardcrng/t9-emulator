import createSagaMiddleware from 'redux-saga';
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit';
import { reducer } from '../leaves';
import rootSaga from '../saga';

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const middleware = [...getDefaultMiddleware(), sagaMiddleware]
  return {
    ...configureStore({ reducer, middleware }),
    runSaga: sagaMiddleware.run
  }
}

const store = createStore()
store.runSaga(rootSaga)

export default store