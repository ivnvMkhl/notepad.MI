import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme, closeNote, createNote, deleteNote, logoutUser, onMenuBlock, saveNote } from '../../redux/actions'

const HeaderMenuBlock = ({ name, items, isOpen }) => {
  const dispatch = useDispatch()
  const headerMenuOpen = useSelector((state) => state.app.appParams.headerMenuOpen)
  const usedId = useSelector((state) => state.note.usedNote.usedId)
  const usedHeader = useSelector((state) => state.note.usedNote.usedHeader)
  const theme = useSelector((state) => state.app.theme)

  if (isOpen) {
    return (
      <div className="header__dd-block">
        <div
          className="header__dd-button_select"
          onClick={() => {
            dispatch(onMenuBlock(name))
          }}
        >
          {name}
        </div>
        <div className="header__modal-container">
          {items.map((item) => (
            <div
              className="header__dd-items"
              key={item}
              onClick={() => {
                //Select action to click header menu
                if (item === 'Save') dispatch(saveNote())
                else if (item === 'Create') {
                  if (usedId === -1) {
                    usedHeader ? dispatch(createNote()) : dispatch({ type: 'SHOW_ALERT' })
                  }
                } else if (item === 'Close') dispatch(closeNote())
                else if (item === 'Delete') dispatch(deleteNote())
                else if (item === 'Dark') {
                  dispatch(changeTheme('Dark'))
                  theme.themeVar.map((themeVar, i) => document.body.style.setProperty(themeVar, theme.dark[i]))
                } else if (item === 'Light') {
                  dispatch(changeTheme('Light'))
                  theme.themeVar.map((themeVar, i) => document.body.style.setProperty(themeVar, theme.light[i]))
                } else if (item === 'Log out') dispatch(logoutUser())
                else dispatch({ type: 'APP/UNDEFINED_FUNC' })

                dispatch(onMenuBlock(name))
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    )
  } else
    return (
      <div
        className="header__dd-button"
        onClick={() => {
          dispatch(onMenuBlock(name))
        }}
        onMouseEnter={() => {
          if (headerMenuOpen) dispatch(onMenuBlock(name))
        }}
      >
        {name}
      </div>
    )
}

export default HeaderMenuBlock
