import reducers from './RootReducer'
import { OPEN_FILE } from '../actions/Types'

describe('Testing File reducer', () => {
  it('should ignore other action', () => {
    const state = reducers.file({ dummy: true }, {
      type: 'DUMMY',
    });
    expect(state).toEqual({
      dummy: true,
    })
  })
  it('should update open files', () => {
    const state = reducers.file({ dummy: true }, {
      type: OPEN_FILE,
      data: ['test1.txt', 'test2.txt'],
    });
    expect(state).toEqual({
      dummy: true,
      files: ['test1.txt', 'test2.txt'],
    })
  })
})