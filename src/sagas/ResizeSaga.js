import { takeEvery, put } from 'redux-saga/effects'
import { ActionCreators } from '../actions/Creator'
import { RESIZE } from '../actions/Types'

function* resizeImageEffect(action) {
  try {
   console.log('ACTION', action)
   yield put({type: 'test', data: 'done'})
  } catch (e) {
    // Return same value
    ActionCreators.failure(e);
  }
}

function* resizeImageSaga() {
  yield takeEvery(RESIZE, resizeImageEffect)
}

export default [resizeImageSaga];