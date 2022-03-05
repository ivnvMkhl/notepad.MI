import { SET_USER, REMOVE_USER } from './types'

const initialUser = {
  email: null,
  token: null,
  id: null,
}

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        email: action.paylod.email,
        token: action.paylod.token,
        id: action.paylod.id,
      }
    case REMOVE_USER:
      return {
        email: null,
        token: null,
        id: null,
      }
    default:
      return state
  }
}
