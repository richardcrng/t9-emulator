import { all, call, put, select, takeEvery } from 'redux-saga/effects';
import { actions } from '../leaves';
import server from '../../server';
import filterT9Predictions from '../../server/predictions/filter';

export function* processKeyClick({ payload: key }) {
  yield put(actions.numericString.create.concat(`${key}`))
  const prevUnfilteredArr = yield select(state => state.unfilteredWords)
  const unfilteredArr = yield call(server.predictions.get, [key, prevUnfilteredArr])
  const filteredArr = yield call(filterT9Predictions, unfilteredArr)
  yield all([
    put(actions.unfilteredWords.create.update(unfilteredArr)),
    put(actions.filteredWords.create.update(filteredArr))
  ])
}

processKeyClick.TRIGGER = 'TRIGGER_SAGA: processKeyClick'
processKeyClick.trigger = payload => ({ type: processKeyClick.TRIGGER, payload })

function* rootSaga() {
  yield takeEvery(processKeyClick.TRIGGER, processKeyClick)
}

export default rootSaga