import {
  CHANGE_NOTES_SORT,
  SWITCH_DISPL_NOTES,
  ON_SORT_MODAL,
  OFF_SORT_MODAL,
  INVERT_NOTES_SORT,
  ON_MENU_BLOCK,
  SHOW_ALERT,
  HIDE_ALERT,
  CHANGE_THEME,
  HIDE_AUTH_LOADER,
  SHOW_AUTH_LOADER,
  REAUTH_CHECK,
  OFF_MENU_BLOCK,
} from '../types'

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
