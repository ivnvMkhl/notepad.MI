import { CLOSE_NOTE, CREATE_NOTE, DELETE_NOTE, SAVE_NOTE, SELECT_NOTE, SET_USED_NOTE } from './types'

export function setUsedNote(note) {
  return {
    type: SET_USED_NOTE,
    payload: note,
  }
}

export function createNote(note) {
  return {
    type: CREATE_NOTE,
    payload: note,
  }
}

export function closeNote() {
  return {
    type: CLOSE_NOTE,
  }
}

export function saveNote() {
  return {
    type: SAVE_NOTE,
  }
}

export function deleteNote() {
  return {
    type: DELETE_NOTE,
  }
}

export function selectNote() {
  return {
    type: SELECT_NOTE,
  }
}
