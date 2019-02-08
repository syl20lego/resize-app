import reducers from './RootReducer'
import { RESIZE } from '../actions/Types'

describe('Testing root reducer', () => {
  it('should ignore other action', () => {
    const state = reducers.file({ dummy: true }, {
      type: 'DUMMY',
    });
    expect(state).toEqual({
      dummy: true,
    })
  })
})