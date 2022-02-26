import { CHANGE_USED_NOTE, CLOSE_NOTE, CREATE_NOTE, DELETE_NOTE, GET_SELECT_NOTE, GET_TEXT_LENGTH, NOTE_SORT, SAVE_NOTE } from './types'

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

  noteParams: {
    areaLength: 0,
    sortFlag: '',
  },
}

export const rootReducer = (state = initialSate, action) => {
  switch (action.type) {
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
            } else {
              note.noteSelected = false
              state.usedNote.usedId = -1
              state.usedNote.usedHeader = ''
              state.usedNote.usedContent = ''
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
        usedNote: { ...state.usedNote, usedId: -1 },
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
    case GET_TEXT_LENGTH:
      return { ...state, noteParams: { ...state.noteParams, areaLength: action.payload } }
    case NOTE_SORT:
      if (action.payload === 'date') {
        return {
          ...state,
          notesList: state.notesList.sort((a, b) => {
            return b.noteDate - a.noteDate
          }),
          noteParams: { ...state.noteParams, sortFlag: !state.noteParams.sortFlag },
        }
      } else if (action.payload === 'update') {
        return {
          ...state,
          notesList: state.notesList.sort((a, b) => {
            return b.noteChange - a.noteChange
          }),
          noteParams: { ...state.noteParams, sortFlag: !state.noteParams.sortFlag },
        }
      } else return state

    default:
      return state
  }
}
