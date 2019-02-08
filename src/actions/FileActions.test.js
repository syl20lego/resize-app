import { ActionCreators } from './Creator'
import { OPEN_FILE } from './Types'

describe('Testing Tweets actions', () => {
  it('Should create an action to change profile', () => {
    expect(ActionCreators.openFile()).toEqual({
      type: OPEN_FILE,
    })
  })
})
