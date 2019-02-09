import { SELECTED_FILES } from './Types'

export const selectedFiles = (files) => {
	return {
		type: SELECTED_FILES,
		data: files
	}
}
