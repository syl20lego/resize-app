import { FAILURE } from './Types'
import * as FileActions from './FileActions';

const failure = (error) => {
  return {
    type: FAILURE,
    data: error,
  };
}

export const ActionCreators = {
  failure,
  ...FileActions,
}