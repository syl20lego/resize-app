import { fork } from 'redux-saga/effects'
import fileSaga from './FileSaga'
import resizeSaga from './ResizeSaga'

const sagas = [ ...fileSaga, ...resizeSaga ]

export default function* root() {
	yield sagas.map((saga) => fork(saga))
}
