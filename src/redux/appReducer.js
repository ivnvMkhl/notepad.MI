import { initialApp } from './initialApp'
import { CHANGE_NOTES_SORT, GET_TEXT_LENGTH, INVERT_NOTES_SORT, OFF_SORT_MODAL, ON_MENU_BLOCK, ON_SORT_MODAL, SWITCH_DISPL_NOTES } from './types'

export const appReducer = (state = initialApp, action) => {
  switch (action.type) {
    //APP REDUCERS
    case GET_TEXT_LENGTH:
      return { ...state, appParams: { ...state.appParams, areaLength: action.payload } }
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
