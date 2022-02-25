import { CREATE_NOTE, SET_USED_NOTE } from './types'

const initialSate = {
  notesList: [
    {
      noteId: 1645721908699,
      noteHeader: 'Note One',
      noteContent: '1 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908699),
      noteSelected: false,
    },
    {
      noteId: 1645721908564,
      noteHeader: 'Note Two',
      noteContent: '2 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908564),
      noteSelected: false,
    },
    {
      noteId: 1645721908385,
      noteHeader: 'Note Tree',
      noteContent: '3 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908385),
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
  },
}

export const notesReducer = (state = initialSate, actions) => {
  switch (actions.types) {
    case CREATE_NOTE:
      return { ...state }
    case SET_USED_NOTE:
      return { ...state, usedNote: actions.payload }
    default:
      return state
  }
}
