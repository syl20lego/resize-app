import { RESIZE } from '../actions/Types'

const defaultState = {}

export default (state = { defaultState }, action) => {
	switch (action.type) {
		case RESIZE:
			return {
				...state,
				files: action.data.map(x =>x)
			}
		default:
			return state
	}
}
