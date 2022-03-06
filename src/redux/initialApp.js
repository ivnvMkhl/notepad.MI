export const initialApp = {
  appParams: {
    areaLength: 0,
    sortType: 'Update',
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
      blockItems: ['Settings', 'Log out', 'xyq'],
      blockOpen: false,
    },
  ],
}
