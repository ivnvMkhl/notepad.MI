import {
  CHANGE_USED_NOTE,
  CLOSE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  GET_SELECT_NOTE,
  GET_TEXT_LENGTH,
  SAVE_NOTE,
  CHANGE_NOTES_SORT,
  SWITCH_DISPL_NOTES,
  ON_SORT_MODAL,
  OFF_SORT_MODAL,
  INVERT_NOTES_SORT,
  ON_MENU_BLOCK,
} from './types'

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

//APP ACTIONS
export function getTextLength(areaLength) {
  return {
    type: GET_TEXT_LENGTH,
    payload: areaLength,
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
