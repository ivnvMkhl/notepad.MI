export const initialSate = {
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
    headerMenuOpen: false,
  },

  menuTree: [
    {
      id: 1001,
      blockTitle: 'Note',
      blockItems: ['Create', 'Save', 'Save to file', 'Delete', 'Close'],
      blockOpen: false,
    },
    {
      id: 1002,
      blockTitle: 'Edit',
      blockItems: ['Undo', 'Rendo', 'Cut', 'Copy', 'Paste', 'Find'],
      blockOpen: false,
    },
    {
      id: 1003,
      blockTitle: 'View',
      blockItems: ['Change Theme', 'Note information'],
      blockOpen: false,
    },
    {
      id: 1004,
      blockTitle: 'Account',
      blockItems: ['Settings', 'Log out'],
      blockOpen: false,
    },
  ],
}
