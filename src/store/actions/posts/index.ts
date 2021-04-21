import { POST_UPDATE_LIST } from '../'

export const postsUpdateList = posts => ({
  type: POST_UPDATE_LIST,
  payload: posts
})
