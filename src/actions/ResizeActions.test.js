import { ActionCreators } from './Creator'
import { RESIZE } from './Types'

describe('Testing Resze actions', () => {
	it('Should create an action to resize', () => {
		expect(ActionCreators.resize()).toEqual({
			type: RESIZE
		})
	})
})
