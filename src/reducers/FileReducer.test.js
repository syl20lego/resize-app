import reducers from './RootReducer'
import { SELECTED_FILES } from '../actions/Types'

describe('Testing File reducer', () => {
	it('should selected files', () => {
		const state = reducers.file(
			{ dummy: true },
			{
				type: SELECTED_FILES,
				data: [ 'test1.txt', 'test2.txt' ]
			}
		)
		expect(state).toEqual({
			dummy: true,
			files: [{"path": "file://test1.txt", "status": "new"}, {"path": "file://test2.txt", "status": "new"}]
		})
	})
})
