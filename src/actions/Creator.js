import { FAILURE } from './Types'
import * as FileActions from './FileActions'
import * as ResizeActions from './ResizeActions'

const failure = (error) => {
	return {
		type: FAILURE,
		data: error
	}
}

export const ActionCreators = {
	failure,
	...FileActions,
	...ResizeActions
}
