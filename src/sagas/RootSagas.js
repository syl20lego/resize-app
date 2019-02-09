import { fork } from 'redux-saga/effects'
import resizeSaga from './ResizeSaga'

const sagas = [ ...resizeSaga ]

export default function* root() {
	yield sagas.map((saga) => fork(saga))
}
