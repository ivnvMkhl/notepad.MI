import {
  CHANGE_USED_NOTE,
  CLOSE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  GET_SELECT_NOTE,
  SAVE_NOTE,
  CHANGE_NOTES_SORT,
  SWITCH_DISPL_NOTES,
  ON_SORT_MODAL,
  OFF_SORT_MODAL,
  INVERT_NOTES_SORT,
  ON_MENU_BLOCK,
  SHOW_AUTH_LOADER,
  HIDE_AUTH_LOADER,
  SHOW_ALERT_MESSAGE,
  SIGNIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  FETCH_NOTES,
  CHANGE_THEME,
} from './types'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { child, get, getDatabase, ref, remove, update } from 'firebase/database'

//USER ACTIONS
export function signInUser(email, password) {
  return async (dispatch) => {
    dispatch({ type: SHOW_AUTH_LOADER })
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
        dispatch({ type: HIDE_AUTH_LOADER })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'error', AlertText: errorMessage } })
        dispatch({ type: LOGOUT_USER })
        dispatch({ type: HIDE_AUTH_LOADER })
      })
  }
}

export function signUpUser(email, password) {
  return async (dispatch) => {
    dispatch({ type: SHOW_AUTH_LOADER })

    const auth = getAuth()

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        dispatch({
          type: SIGNUP_USER,
          payload: true,
        })
        dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'info', AlertText: 'Sing up completed successfilly!' } })
        dispatch({ type: HIDE_AUTH_LOADER })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'error', AlertText: errorMessage } })
        dispatch({
          type: SIGNUP_USER,
          payload: false,
        })
        dispatch({ type: HIDE_AUTH_LOADER })
      })
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_USER,
  }
}

//NOTE ACTIONS

export function changeUsedNote(usedNote) {
  return {
    type: CHANGE_USED_NOTE,
    payload: usedNote,
  }
}

export function getSelectNote(noteId) {
  return {
    type: GET_SELECT_NOTE,
    payload: noteId,
  }
}

export function closeNote() {
  return {
    type: CLOSE_NOTE,
  }
}

export function saveNote(uid, noteId, usedHeader, usedContent) {
  return async (dispatch) => {
    const noteChange = Date.now()
    const db = getDatabase()

    update(ref(db, `${uid}/notes/` + noteId), {
      noteHeader: usedHeader,
      noteContent: usedHeader,
      noteChange,
    })
      .then(() => {
        dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'info', AlertText: 'Save note on server!' } })
        dispatch({
          type: SAVE_NOTE,
          payload: {
            noteId,
            usedHeader,
            usedContent,
            noteChange,
            syncServer: true,
          },
        })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'error', AlertText: errorMessage } })
        dispatch({
          type: SAVE_NOTE,
          payload: {
            noteId,
            usedHeader,
            usedContent,
            noteChange,
            syncServer: false,
          },
        })
      })
  }
}

export function deleteNote(uid, deleteId) {
  return async (dispatch) => {
    const db = getDatabase()
    remove(ref(db, `${uid}/notes/` + deleteId))
      .then(() => dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'info', AlertText: 'Delete note on server!' } }))
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'error', AlertText: errorMessage } })
      })

    dispatch({ type: DELETE_NOTE })
  }
}

export function createNote(uid, usedHeader, usedContent) {
  return async (dispatch) => {
    const noteId = Date.now()
    const noteDate = noteId
    const noteChange = noteId
    const db = getDatabase()

    update(ref(db, `${uid}/notes/` + noteId), {
      noteId,
      noteHeader: usedHeader,
      noteContent: usedHeader,
      noteDate,
      noteChange,
      noteSelected: false,
    })
      .then(() => {
        dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'info', AlertText: 'Create note on server!' } })
        dispatch({
          type: CREATE_NOTE,
          payload: {
            noteId,
            usedHeader,
            usedContent,
            noteDate,
            noteChange,
            syncServer: true,
            noteSelected: false,
          },
        })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode)
        console.log(errorMessage)
        dispatch({ type: SHOW_ALERT_MESSAGE, payload: { alertType: 'error', AlertText: errorMessage } })
        dispatch({
          type: CREATE_NOTE,
          payload: {
            noteId,
            usedHeader,
            usedContent,
            noteDate,
            noteChange,
            syncServer: false,
            noteSelected: false,
          },
        })
      })
  }
}

//APP ACTIONS

export function changeTheme(themeType) {
  return {
    type: CHANGE_THEME,
    payload: themeType,
  }
}

export function changeNoteSort(type) {
  return {
    type: CHANGE_NOTES_SORT,
    payload: type,
  }
}

export function invertNoteSort() {
  return {
    type: INVERT_NOTES_SORT,
  }
}

export function switchDisplNotes() {
  return {
    type: SWITCH_DISPL_NOTES,
  }
}

export function onSortModal() {
  return {
    type: ON_SORT_MODAL,
  }
}

export function offSortModal() {
  return {
    type: OFF_SORT_MODAL,
  }
}

export function onMenuBlock(title) {
  return {
    type: ON_MENU_BLOCK,
    payload: title,
  }
}
