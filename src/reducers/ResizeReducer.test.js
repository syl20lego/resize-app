import reducers from './RootReducer'
import { RESIZE } from '../actions/Types'

describe('Testing resize reducer', () => {
  it('should resize images', () => {
    const state = reducers.file({ dummy: true }, {
      type: RESIZE,
      data: ['test1.txt', 'test2.txt'],
    });
    expect(state).toEqual({
      dummy: true,
      files: ['test1.txt', 'test2.txt'],
    })
  })
})