import { HYDRATE } from 'next-redux-wrapper'
import { POST_UPDATE_LIST } from '../../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload.posts
    case POST_UPDATE_LIST:
      return action.payload
    default:
      return state
  }
}

export default reducer
