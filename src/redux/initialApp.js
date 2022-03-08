export const initialApp = {
  appParams: {
    sortType: 'Update',
    invertSortFlag: false,
    sortModalFlag: false,
    displayBttnFlag: false,
    headerMenuOpen: false,
    themeType: 'light',
    isRegisted: false,
    authLoader: true,
    reAuthFlag: true,
  },

  menuTree: [
    {
      id: 1001,
      blockTitle: 'Note',
      blockItems: ['Create', 'Save', 'Delete', 'Close'],
      blockOpen: false,
    },
    {
      id: 1002,
      blockTitle: 'Sort',
      blockItems: ['Update', 'Date', 'Size', 'ABC'],
      blockOpen: false,
    },
    {
      id: 1003,
      blockTitle: 'Theme',
      blockItems: ['Dark', 'Light'],
      blockOpen: false,
    },
    {
      id: 1004,
      blockTitle: 'Account',
      blockItems: ['Log out'],
      blockOpen: false,
    },
  ],

  theme: {
    // for change theme iteration themeVar and use document.body.style.setProperty(themeVar, theme.dark[i])
    themeVar: [
      '--bg-color',
      '--text-color',
      '--text-dimmed',
      '--bttns-border',
      '--elem-basic',
      '--elem-hover',
      '--elem-activ',
      '--note-basic',
      '--note-activ',
      '--note-hover',
    ],
    light: ['#ffffff', '#28343a', 'rgba(40, 52, 58, 0.5)', 'rgba(40, 52, 58, 0.3)', '#f4f5f6', '#e0e0e0', '#b1b1b1', '#ffffff', '#ffd6a3', '#ffe4c4'],
    dark: [
      '#232f34',
      '#edf0f1',
      'rgba(237, 240, 241, 0.5)',
      'rgba(237, 240, 241 0.3)',
      '#2b3840',
      '#414d55',
      '#636e75',
      '#414d55',
      '#a68a6f',
      '#d09257',
    ],
  },
}
