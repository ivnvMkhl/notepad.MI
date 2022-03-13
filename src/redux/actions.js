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
  SHOW_ALERT,
  HIDE_ALERT,
  SIGNIN_USER,
  SIGNUP_USER,
  LOGOUT_USER,
  FETCH_NOTES,
  CHANGE_THEME,
  HIDE_AUTH_LOADER,
  SHOW_AUTH_LOADER,
  REAUTH_CHECK,
  DELETE_ALL_NOTES,
  START_FETCH_NOTES_COMPLETED,
  OFF_MENU_BLOCK,
} from './types'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { child, get, getDatabase, ref, remove, update } from 'firebase/database'

//USER ACTIONS
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
          payload: user,
        })

        dispatch({ type: START_FETCH_NOTES_COMPLETED })
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Sing up completed successfilly!' } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
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

//NOTE ACTIONS

export function fetchNotes(user) {
  return async (dispatch) => {
    const dbRef = ref(getDatabase())
    get(child(dbRef, `${user.uid}/notes`)).then((snapshot) => {
      if (snapshot.val() !== null) dispatch({ type: FETCH_NOTES, payload: snapshot.val() })
      dispatch({ type: START_FETCH_NOTES_COMPLETED })
    })
  }
}

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

export function saveNote(uid, noteId, usedHeader, usedContent, notesList) {
  return async (dispatch) => {
    if (noteId > 0) {
      const noteChange = Date.now()
      const db = getDatabase()

      if (usedHeader.trim() === '') usedHeader = usedContent.substring(0, 40)

      notesList.forEach((note) => {
        if (note.noteId === noteId) {
          if (note.noteContent !== usedContent || note.noteHeader !== usedHeader) {
            update(ref(db, `${uid}/notes/` + noteId), {
              noteHeader: usedHeader,
              noteContent: usedContent,
              noteChange,
            })
              .then(() => {
                dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Save note on server!' } })
                setTimeout(() => {
                  dispatch({ type: HIDE_ALERT })
                }, 3000)
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
                dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: errorMessage } })
                setTimeout(() => {
                  dispatch({ type: HIDE_ALERT })
                }, 3000)
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
      })
    }
  }
}

export function deleteNote(uid, deleteId) {
  return async (dispatch) => {
    const db = getDatabase()
    remove(ref(db, `${uid}/notes/` + deleteId))
      .then(() => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Delete note on server!' } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
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

    dispatch({ type: DELETE_NOTE, payload: deleteId })
  }
}

export function deleteAllNotes(uid) {
  return async (dispatch) => {
    const db = getDatabase()
    remove(ref(db, `${uid}/notes/`))
      .then(() => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Delete all notes on server!' } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
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

    dispatch({ type: DELETE_ALL_NOTES })
  }
}

export function createNote(uid, usedHeader, usedContent) {
  return async (dispatch) => {
    const noteId = Date.now()
    const noteDate = noteId
    const noteChange = noteId
    const db = getDatabase()

    if (usedHeader.trim() === '') usedHeader = usedContent.substring(0, 40)

    update(ref(db, `${uid}/notes/` + noteId), {
      noteId,
      noteHeader: usedHeader,
      noteContent: usedContent,
      noteDate,
      noteChange,
      noteSelected: false,
    })
      .then(() => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Create note on server!' } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
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
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: errorMessage } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
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

export function showAlert(type, text) {
  return async (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: { alertType: type, alertText: text } })
    setTimeout(() => {
      dispatch({ type: HIDE_ALERT })
    }, 3000)
  }
}

export function reAuthCheck() {
  return {
    type: REAUTH_CHECK,
  }
}

export function hideAuthLoader() {
  return {
    type: HIDE_AUTH_LOADER,
  }
}

export function showAuthLoader() {
  return {
    type: SHOW_AUTH_LOADER,
  }
}

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
export function offMenuBlock() {
  return {
    type: OFF_MENU_BLOCK,
  }
}
