import { RESIZE } from './Types'

export const resize = config => {
  return {
    type: RESIZE,
    data: config,
  }
}