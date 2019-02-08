import { OPEN_FILE } from './Types'

export const openFile = files => {
  return {
    type: OPEN_FILE,
    data: files,
  }
}