import { initialApp } from './initialApp'
import {
  CHANGE_NOTES_SORT,
  CHANGE_THEME,
  HIDE_ALERT,
  HIDE_AUTH_LOADER,
  INVERT_NOTES_SORT,
  OFF_SORT_MODAL,
  ON_MENU_BLOCK,
  ON_SORT_MODAL,
  REAUTH_CHECK,
  SHOW_ALERT,
  SHOW_AUTH_LOADER,
  SIGNUP_USER,
  START_FETCH_NOTES_COMPLETED,
  SWITCH_DISPL_NOTES,
} from './types'

export const appReducer = (state = initialApp, action) => {
  switch (action.type) {
    //APP REDUCERS
    case SHOW_ALERT:
      return {
        ...state,
        alert: { alertText: action.payload.alertText, alertType: action.payload.alertType },
        appParams: { ...state.appParams, showAlert: true },
      }
    case HIDE_ALERT:
      return {
        ...state,
        alert: { alertText: '', alertType: '' },
        appParams: { ...state.appParams, showAlert: false },
      }
    case START_FETCH_NOTES_COMPLETED:
      return { ...state, appParams: { ...state.appParams, startFetchNotes: false } }
    case REAUTH_CHECK:
      return { ...state, appParams: { ...state.appParams, reAuthFlag: false } }
    case HIDE_AUTH_LOADER:
      return { ...state, appParams: { ...state.appParams, authLoader: false } }
    case SHOW_AUTH_LOADER:
      return { ...state, appParams: { ...state.appParams, authLoader: true } }
    case SIGNUP_USER:
      return { ...state, appParams: { ...state.appParams, isRegisted: action.payload } }
    case CHANGE_THEME:
      return { ...state, appParams: { ...state.appParams, themeType: action.payload } }

    case CHANGE_NOTES_SORT:
      return {
        ...state,
        appParams: {
          ...state.appParams,
          sortType: action.payload,
        },
      }
    case INVERT_NOTES_SORT:
      return { ...state, appParams: { ...state.appParams, invertSortFlag: !state.appParams.invertSortFlag } }
    case SWITCH_DISPL_NOTES:
      return { ...state, appParams: { ...state.appParams, displayBttnFlag: !state.appParams.displayBttnFlag } }
    case ON_SORT_MODAL:
      return { ...state, appParams: { ...state.appParams, sortModalFlag: true } }
    case OFF_SORT_MODAL:
      return { ...state, appParams: { ...state.appParams, sortModalFlag: false } }
    case ON_MENU_BLOCK:
      return {
        ...state,
        menuTree: state.menuTree.map((item) => {
          if (item.blockTitle === action.payload) {
            if (item.blockOpen === false) {
              item.blockOpen = true
              state.appParams.headerMenuOpen = true
            } else {
              item.blockOpen = false
              state.appParams.headerMenuOpen = false
            }
          } else item.blockOpen = false
          return item
        }),
      }
    default:
      return state
  }
}
