import {
  CHANGE_NOTES_SORT,
  CHANGE_USED_NOTE,
  CLOSE_NOTE,
  CREATE_NOTE,
  DELETE_NOTE,
  GET_SELECT_NOTE,
  GET_TEXT_LENGTH,
  INVERT_NOTES_SORT,
  OFF_SORT_MODAL,
  ON_SORT_MODAL,
  SAVE_NOTE,
  SWITCH_DISPL_NOTES,
} from './types'

const initialSate = {
  notesList: [
    {
      noteId: 1645721908699,
      noteHeader: 'Note One',
      noteContent: '1 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908699),
      noteChange: new Date(1645721908699),
      noteSelected: false,
    },
    {
      noteId: 1645721908564,
      noteHeader: 'Note Two',
      noteContent: '2 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908564),
      noteChange: new Date(1645721908564),
      noteSelected: false,
    },
    {
      noteId: 1645721908385,
      noteHeader: 'Note Tree',
      noteContent: '3 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908385),
      noteChange: new Date(1645721908385),
      noteSelected: false,
    },
  ],

  usedNote: {
    usedId: -1,
    usedHeader: 'init test',
    usedContent: 'init test',
  },

  appParams: {
    areaLength: 0,
    sortType: 'update',
    invertSortFlag: false,
    sortModalFlag: false,
    displayBttnFlag: false,
  },
}

export const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
    //NOTE REDUCERS
    case CHANGE_USED_NOTE:
      return { ...state, usedNote: action.payload }
    case GET_SELECT_NOTE:
      return {
        ...state,
        notesList: state.notesList.map((note) => {
          if (note.noteId === action.payload) {
            if (note.noteSelected === false) {
              note.noteSelected = true
              state.usedNote.usedId = note.noteId
              state.usedNote.usedHeader = note.noteHeader
              state.usedNote.usedContent = note.noteContent
              state.appParams.areaLength = note.noteContent.length
            } else {
              note.noteSelected = false
              state.usedNote.usedId = -1
              state.usedNote.usedHeader = ''
              state.usedNote.usedContent = ''
              state.appParams.areaLength = 0
            }
          } else {
            note.noteSelected = false
          }
          return note
        }),
      }
    case CLOSE_NOTE:
      return {
        ...state,
        usedNote: {
          usedId: -1,
          usedHeader: '',
          usedContent: '',
        },
        notesList: state.notesList.map((note) => {
          if (note.noteSelected === true) note.noteSelected = false
          return note
        }),
        appParams: { ...state.appParams, areaLength: 0 },
      }
    case SAVE_NOTE:
      return {
        ...state,
        notesList: state.notesList.map((note) => {
          if (state.usedNote.usedId === note.noteId) {
            state.usedNote.usedHeader.length > 0 ? (note.noteHeader = state.usedNote.usedHeader) : (note.noteHeader = 'Not set')
            note.noteContent = state.usedNote.usedContent
            note.noteChange = new Date(Date.now())
          }
          return note
        }),
      }
    case DELETE_NOTE:
      return {
        ...state,
        notesList: state.notesList.filter((note) => note.noteId !== state.usedNote.usedId),
        usedNote: {
          usedId: -1,
          usedHeader: '',
          usedContent: '',
        },
      }
    case CREATE_NOTE:
      return {
        ...state,
        notesList: state.notesList.concat([
          {
            noteId: action.payload,
            noteHeader: state.usedNote.usedHeader,
            noteContent: state.usedNote.usedContent,
            noteDate: new Date(action.payload),
            noteChange: new Date(action.payload),
            noteSelected: true,
          },
        ]),
        usedNote: { ...state.usedNote, usedId: action.payload },
      }
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
    default:
      return state
  }
}
