import { ENTER_TEST_MODE, FORGOT_PASSWORD, LOGOUT_USER, SIGNIN_USER, SIGNUP_USER } from '../types'

const initialUser = {
  email: null,
  uid: null,
  isAuth: false,
}

export const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...action.payload, isAuth: true }
    case SIGNUP_USER:
      return {
        email: null,
        uid: null,
        isAuth: false,
      }
    case LOGOUT_USER:
      return {
        email: null,
        uid: null,
        isAuth: false,
      }
    case ENTER_TEST_MODE:
      return {
        email: 'test',
        uid: 'test',
        isAuth: true,
      }
    case FORGOT_PASSWORD:
      return {
        email: null,
        uid: null,
        isAuth: false,
      }
    default:
      return state
  }
}
