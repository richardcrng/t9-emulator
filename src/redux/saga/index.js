import { takeEvery } from 'redux-saga/effects';

export function* processKeyClick({ payload: key }) {
  console.log(key)
}

processKeyClick.TRIGGER = 'TRIGGER_SAGA: processKeyClick'
processKeyClick.trigger = payload => ({ type: processKeyClick.TRIGGER, payload })

function* rootSaga() {
  yield takeEvery(processKeyClick.TRIGGER, processKeyClick)
}

export default rootSaga