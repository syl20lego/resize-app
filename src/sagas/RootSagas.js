import { fork } from 'redux-saga/effects'
import fileSaga from './FileSaga'

const sagas = [
  ...fileSaga,
];

export default function* root() {
  yield sagas.map(saga => fork(saga))
}