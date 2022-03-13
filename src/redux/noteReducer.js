import { CHANGE_USED_NOTE, CLOSE_NOTE, CREATE_NOTE, DELETE_ALL_NOTES, DELETE_NOTE, FETCH_NOTES, GET_SELECT_NOTE, SAVE_NOTE } from './types'

import { initialNote } from './initialNote'

export const noteReducer = (state = initialNote, action) => {
  switch (action.type) {
    //NOTE REDUCERS

    case FETCH_NOTES:
      return { ...state, notesList: Object.values(action.payload) }
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
              state.usedNote.usedDate = new Date(note.noteDate)
              state.usedNote.usedChange = new Date(note.noteChange)
            } else {
              note.noteSelected = false
              state.usedNote.usedId = -1
              state.usedNote.usedHeader = ''
              state.usedNote.usedContent = ''
              state.usedNote.usedDate = null
              state.usedNote.usedChange = null
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
          usedDate: null,
          usedChange: null,
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
          if (action.payload.noteId === note.noteId) {
            note.noteHeader = action.payload.usedHeader
            note.noteContent = action.payload.usedContent
            note.noteChange = action.payload.noteChange
            note.syncServer = action.payload.syncServer
          }
          return note
        }),
      }
    case DELETE_NOTE:
      return {
        ...state,
        notesList: state.notesList.filter((note) => note.noteId !== action.payload),
        usedNote: {
          usedId: -1,
          usedHeader: '',
          usedContent: '',
          usedDate: null,
          usedChange: null,
        },
      }
    case DELETE_ALL_NOTES:
      return {
        ...state,
        notesList: [],
        usedNote: {
          usedId: -1,
          usedHeader: '',
          usedContent: '',
          usedDate: null,
          usedChange: null,
        },
      }
    case CREATE_NOTE:
      return {
        ...state,
        notesList: state.notesList.concat([
          {
            noteId: action.payload.noteId,
            noteHeader: action.payload.usedHeader,
            noteContent: action.payload.usedContent,
            noteDate: action.payload.noteDate,
            noteChange: action.payload.noteChange,
            noteSelected: true,
            syncServer: action.payload.syncServer,
          },
        ]),
        usedNote: {
          usedId: action.payload.noteId,
          usedHeader: action.payload.usedHeader,
          usedContent: action.payload.usedContent,
          usedDate: new Date(action.payload.noteDate),
          usedChange: new Date(action.payload.noteChange),
        },
      }

    default:
      return state
  }
}
