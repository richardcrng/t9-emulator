import { put, takeEvery } from 'redux-saga/effects';
import { actions } from '../leaves';

export function* processKeyClick({ payload: key }) {
  yield put(actions.numericString.create.concat(`${key}`))
}

processKeyClick.TRIGGER = 'TRIGGER_SAGA: processKeyClick'
processKeyClick.trigger = payload => ({ type: processKeyClick.TRIGGER, payload })

function* rootSaga() {
  yield takeEvery(processKeyClick.TRIGGER, processKeyClick)
}

export default rootSaga