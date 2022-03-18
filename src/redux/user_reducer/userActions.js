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
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, sendPasswordResetEmail } from 'firebase/auth'
import { child, get, getDatabase, ref } from 'firebase/database'

//USER ACTIONS

export function enterTestMode() {
  return {
    type: ENTER_TEST_MODE,
  }
}

export function forgotPassword(email) {
  return async (dispatch) => {
    const auth = getAuth()

    sendPasswordResetEmail(auth, email)
      .then(() => {
        dispatch({
          type: FORGOT_PASSWORD,
        })

        // dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Sing up completed successfilly!' } })
        // setTimeout(() => {
        //   dispatch({ type: HIDE_ALERT })
        // }, 3000)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: errorMessage } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}

export function logOutUser() {
  return async (dispatch) => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        dispatch({ type: LOGOUT_USER })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: errorMessage } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}

export function signInUser(email, password) {
  return async (dispatch) => {
    const auth = getAuth()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch({
          type: SIGNIN_USER,
          payload: user,
        })

        const dbRef = ref(getDatabase())
        get(child(dbRef, `${user.uid}/notes`)).then((snapshot) => {
          console.log(snapshot.val())
          if (snapshot.val() !== null) dispatch({ type: FETCH_NOTES, payload: snapshot.val() })
        })

        dispatch({ type: START_FETCH_NOTES_COMPLETED })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: errorMessage } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}

export function signUpUser(email, password) {
  return async (dispatch) => {
    const auth = getAuth()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch({
          type: SIGNUP_USER,
        })

        // dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Sing up completed successfilly!' } })
        // setTimeout(() => {
        //   dispatch({ type: HIDE_ALERT })
        // }, 3000)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: errorMessage } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}

export function logoutUser() {
  return async (dispatch) => {
    const auth = getAuth()
    signOut(auth)
      .then(() => {
        dispatch({ type: LOGOUT_USER })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: errorMessage } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}
