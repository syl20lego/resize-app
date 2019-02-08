import { OPEN_FILE } from '../actions/Types';

const defaultState = {
}

export default (state = {defaultState}, action) => {
  switch (action.type) {
    case OPEN_FILE:
      return {
        ...state,
        files: action.data,
      };
    default:
      return state;
  }
};