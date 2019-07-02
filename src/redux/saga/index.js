import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { actions } from '../leaves';
import server from '../../server';
import filterT9Predictions from '../../server/predictions/filter';

export function* processKeyClick({ payload: key }) {
  if ([0, '*', '#'].includes(key)) {
    return yield call(handleSpecialKey, key)
  }
  yield put(actions.numericString.create.concat(`${key}`))
  const prevUnfilteredArr = yield select(state => state.unfilteredWords)
  const unfilteredArr = yield call(server.predictions.get, [key, prevUnfilteredArr])
  yield put(actions.unfilteredWords.create.update(unfilteredArr))
  const filteredArr = yield call(filterT9Predictions, unfilteredArr)
  yield put(actions.filteredWords.create.update(filteredArr))
}

processKeyClick.TRIGGER = 'TRIGGER_SAGA: processKeyClick'
processKeyClick.trigger = payload => ({ type: processKeyClick.TRIGGER, payload })

function* handleSpecialKey(key) {
  switch (key) {
    case 0:
      yield put(actions.shouldFilter.create.toggle())
      break

    case '*':
      yield all([
        actions.numericString.create.reset(),
        actions.unfilteredWords.create.reset(),
        actions.filteredWords.create.reset()
      ].map(action => put(action)));
      break

    case '#':
      yield put(actions.numericString.create.slice([0, -1]))
      const newString = yield select(state => state.numericString)
      const unfilteredArr = yield call(server.predictions.get, newString)
      const filteredArr = yield call(filterT9Predictions, unfilteredArr)
      yield all([
        put(actions.unfilteredWords.create.update(unfilteredArr)),
        put(actions.filteredWords.create.update(filteredArr))
      ])
      break
      
    default: break;
  }
}

function* rootSaga() {
  yield takeEvery(processKeyClick.TRIGGER, processKeyClick)
}

export default rootSaga