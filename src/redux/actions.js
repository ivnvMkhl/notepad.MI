import { CHANGE_USED_NOTE, CLOSE_NOTE, CREATE_NOTE, DELETE_NOTE, GET_SELECT_NOTE, GET_TEXT_LENGTH, SAVE_NOTE, NOTE_SORT } from './types'

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

export function createNote() {
  return {
    type: CREATE_NOTE,
    payload: Date.now(),
  }
}

export function getTextLength(areaLength) {
  return {
    type: GET_TEXT_LENGTH,
    payload: areaLength,
  }
}

//types: start, abc, date, size
export function noteSort(type) {
  return {
    type: NOTE_SORT,
    payload: type,
  }
}
