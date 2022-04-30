import { forgotRequest, loginRequest, logoutRequest, refreshTokenRequest, registrationRequest } from '../../serverRequest'
import {
  SHOW_ALERT,
  HIDE_ALERT,
  SIGNIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  FETCH_NOTES,
  START_FETCH_NOTES_COMPLETED,
  ENTER_TEST_MODE,
  FORGOT_PASSWORD,
} from '../types'

//USER ACTIONS

export function enterTestMode() {
  return async (dispatch) => {
    dispatch({ type: ENTER_TEST_MODE })
    dispatch({ type: START_FETCH_NOTES_COMPLETED })
  }
}

export function forgotPassword(email) {
  return async (dispatch) => {
    forgotRequest(email)
      .then((data) => {
        console.log(data)
        dispatch({
          type: FORGOT_PASSWORD,
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: err.message } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}

export function reSingIn(data) {
  return async (dispatch) => {
    console.log(data)
    dispatch({
      type: SIGNIN_USER,
      payload: data,
    })
    //fetch notes
    dispatch({ type: START_FETCH_NOTES_COMPLETED })
  }
}

export function signInUser(email, password) {
  return async (dispatch) => {
    loginRequest(email, password)
      .then((data) => {
        console.log(data)
        dispatch({
          type: SIGNIN_USER,
          payload: data,
        })
        //fetch notes
        dispatch({ type: START_FETCH_NOTES_COMPLETED })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: err.message } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}

export function signUpUser(email, password) {
  return async (dispatch) => {
    registrationRequest(email, password)
      .then((data) => {
        console.log(data)
        dispatch({
          type: SIGNUP_USER,
          payload: data,
        })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: err.message } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}

export function logoutUser(email) {
  return async (dispatch) => {
    logoutRequest(email)
      .then((data) => {
        dispatch({ type: LOGOUT_USER })
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: err.message } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}
