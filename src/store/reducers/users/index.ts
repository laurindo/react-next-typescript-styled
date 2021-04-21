import { HYDRATE } from 'next-redux-wrapper'
import { USER_UPDATE, USER_RESET } from '../../actions'

const initialState = {
  id: null,
  firstName: null,
  lastName: null,
  fullName: null,
  avatar: null
}

interface User {
  id: string | null
  firstName: string | null
  lastName: string | null
  fullName: string | null
  avatar: string | null
}

let newState: User = { ...initialState }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload.user }
    case USER_UPDATE:
      newState = { ...state, ...action.payload }
      newState.fullName = `${newState.firstName} ${newState.lastName}`
      return newState
    case USER_RESET:
      return initialState
    default:
      return state
  }
}

export default reducer
