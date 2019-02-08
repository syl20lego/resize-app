import { ActionCreators } from './Creator'
import { SELECTED_FILES } from './Types'

describe('Testing File actions', () => {
  it('Should create an action to open file', () => {
    expect(ActionCreators.selectedFiles()).toEqual({
      type: SELECTED_FILES,
    })
  })
})
