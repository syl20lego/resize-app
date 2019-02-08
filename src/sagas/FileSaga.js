// import { put, call, takeLatest } from 'redux-saga/effects';
import { ActionCreators } from '../actions/Creator';
// import { OPEN_FILE } from '../actions/Types';

function* openFileEffect(action) {
  try {
   console.log('ACTION', action)
  } catch (e) {
    // Return same value
    ActionCreators.failure(e);
  }
}

function* openFileSaga() {
  yield openFileEffect;
}

export default [openFileSaga];