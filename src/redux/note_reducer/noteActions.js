import {
  CHANGE_USED_NOTE,
  CLOSE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  GET_SELECT_NOTE,
  SAVE_NOTE,
  SHOW_ALERT,
  HIDE_ALERT,
  FETCH_NOTES,
  DELETE_ALL_NOTES,
  START_FETCH_NOTES_COMPLETED,
  NO_NOTES,
} from '../types'
import { getAllNotesRequest, saveNotesRequest, deleteNotesRequest, deleteAllNotesRequest } from '../../serverRequest'

//NOTE ACTIONS

export function fetchNotes(user) {
  return async (dispatch) => {
    getAllNotesRequest(user.accessToken).then((res) => {
      if (res.length > 0) dispatch({ type: FETCH_NOTES, payload: res })
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

export function saveNote(accessToken, noteId, noteHeader, noteContent) {
  return async (dispatch) => {
    const noteChange = Date.now()

    if (noteHeader.trim() === '') noteHeader = noteContent.substring(0, 40)

    await saveNotesRequest({ noteId, noteHeader, noteContent, noteChange }, accessToken)
      .then(() => {
        dispatch({
          type: SAVE_NOTE,
          payload: {
            noteId,
            noteHeader,
            noteContent,
            noteChange,
          },
        })
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Save note on server!' } })
      })
      .catch((error) => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: error.message } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}

export function deleteNote(accessToken, deleteId) {
  return async (dispatch) => {
    deleteNotesRequest(deleteId, accessToken)
      .then(() => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Delete note on server!' } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
      .catch((error) => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: error.message } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
    dispatch({ type: DELETE_NOTE, payload: deleteId })
  }
}

export function deleteAllNotes(accessToken) {
  return async (dispatch) => {
    deleteAllNotesRequest(accessToken)
      .then(() => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'compl', alertText: 'Delete all notes on server!' } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
      .catch((error) => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: error.message } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
    dispatch({ type: DELETE_ALL_NOTES })
  }
}

export function createNote(accessToken, noteHeader, noteContent) {
  return async (dispatch) => {
    const noteId = Date.now()
    const noteDate = noteId
    const noteChange = noteId
    const noteSelected = false

    if (noteHeader.trim() === '') noteHeader = noteContent.substring(0, 40)

    saveNotesRequest({ noteId, noteHeader, noteContent, noteChange, noteDate, noteSelected }, accessToken)
      .then(() => {
        dispatch({
          type: CREATE_NOTE,
          payload: {
            noteId,
            noteHeader,
            noteContent,
            noteDate,
            noteChange,
            noteSelected,
          },
        })
      })
      .catch((error) => {
        dispatch({ type: SHOW_ALERT, payload: { alertType: 'err', alertText: error.message } })
        setTimeout(() => {
          dispatch({ type: HIDE_ALERT })
        }, 3000)
      })
  }
}
