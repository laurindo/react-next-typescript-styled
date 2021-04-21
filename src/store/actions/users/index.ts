import { USER_UPDATE, USER_RESET } from '../'

export const userUpdate = user => ({
  type: USER_UPDATE,
  payload: user
})

export const userReset = user => ({
  type: USER_RESET
})
