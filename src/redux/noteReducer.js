import { CHANGE_USED_NOTE, CLOSE_NOTE, CREATE_NOTE, DELETE_NOTE, FETCH_NOTES, GET_SELECT_NOTE, SAVE_NOTE } from './types'

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
            noteId: action.payload.noteId,
            noteHeader: action.payload.usedHeader,
            noteContent: action.payload.usedContent,
            noteDate: action.payload.noteDate,
            noteChange: action.payload.noteChange,
            noteSelected: true,
            syncServer: action.payload.syncServer,
          },
        ]),
        usedNote: { ...state.usedNote, usedId: action.payload },
      }

    default:
      return state
  }
}
