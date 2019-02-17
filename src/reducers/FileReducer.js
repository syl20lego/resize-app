import { SELECTED_FILES } from '../actions/Types'

const defaultState = {}

export default (state = { defaultState }, action) => {
	switch (action.type) {
		case SELECTED_FILES:
			return {
				...state,
				files: action.data.map(location => ({path: `file://${location}`, status: 'new'}))
			}
		default:
			return state
	}
}
