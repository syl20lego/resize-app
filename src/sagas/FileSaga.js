import { takeEvery, put } from 'redux-saga/effects'
import { ActionCreators } from '../actions/Creator'
import { SELECTED_FILES } from '../actions/Types'

function* selectedFilesEffect(action) {
	try {
		console.log('ACTION', action)
		yield put({ type: 'test', data: 'done' })
	} catch (e) {
		// Return same value
		ActionCreators.failure(e)
	}
}

function* selectedFilesSaga() {
	yield takeEvery(SELECTED_FILES, selectedFilesEffect)
}

export default [ selectedFilesSaga ]
