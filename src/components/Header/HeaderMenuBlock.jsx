import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  changeNoteSort,
  changeTheme,
  closeNote,
  createNote,
  deleteAllNotes,
  deleteNote,
  invertNoteSort,
  logoutUser,
  onMenuBlock,
  saveNote,
} from '../../redux/actions'

const HeaderMenuBlock = ({ name, items, isOpen }) => {
  const dispatch = useDispatch()
  const headerMenuOpen = useSelector((state) => state.app.appParams.headerMenuOpen)
  const usedId = useSelector((state) => state.note.usedNote.usedId)
  const notesList = useSelector((state) => state.note.notesList)
  const usedHeader = useSelector((state) => state.note.usedNote.usedHeader)
  const usedContent = useSelector((state) => state.note.usedNote.usedContent)
  const theme = useSelector((state) => state.app.theme)
  const uid = useSelector((state) => state.user.uid)
  const sortType = useSelector((state) => state.app.appParams.sortType)
  const invertSortFlag = useSelector((state) => state.app.appParams.invertSortFlag)
  const email = useSelector((state) => state.user.email)

  let blockName
  name === 'Account' ? (blockName = email.substring(0, email.indexOf('@'))) : (blockName = name)

  if (isOpen) {
    return (
      <div className="header__dd-block" tabIndex="0">
        <div
          className="header__dd-button_select"
          onClick={() => {
            dispatch(onMenuBlock(name))
          }}
        >
          {blockName}
        </div>
        <div className="header__modal-container">
          {items.map((item) => (
            <div
              tabIndex="0"
              className="header__dd-items"
              key={item}
              onClick={() => {
                //Select action to click header menu
                if (item === 'Save') dispatch(saveNote(uid, usedId, usedHeader, usedContent, notesList))
                else if (item === 'Create') {
                  if (usedId === -1) {
                    usedHeader ? dispatch(createNote(uid, usedHeader, usedContent)) : dispatch({ type: 'SHOW_ALERT' })
                  } else {
                    dispatch(saveNote(uid, usedId, usedHeader, usedContent, notesList))
                    dispatch(closeNote())
                  }
                } else if (item === 'Close') dispatch(closeNote())
                else if (item === 'Delete') dispatch(deleteNote(uid, usedId))
                else if (item === 'Delete all notes') dispatch(deleteAllNotes(uid))
                else if (item === 'Update') {
                  if (sortType === 'Update') {
                    dispatch(invertNoteSort())
                  } else {
                    if (invertSortFlag) {
                      dispatch(invertNoteSort())
                    }
                    dispatch(changeNoteSort('Update'))
                  }
                } else if (item === 'Date') {
                  if (sortType === 'Date') {
                    dispatch(invertNoteSort())
                  } else {
                    if (invertSortFlag) {
                      dispatch(invertNoteSort())
                    }
                    dispatch(changeNoteSort('Date'))
                  }
                } else if (item === 'Size') {
                  if (sortType === 'Size') {
                    dispatch(invertNoteSort())
                  } else {
                    if (invertSortFlag) {
                      dispatch(invertNoteSort())
                    }
                    dispatch(changeNoteSort('Size'))
                  }
                } else if (item === 'ABC') {
                  if (sortType === 'ABC') {
                    dispatch(invertNoteSort())
                  } else {
                    if (invertSortFlag) {
                      dispatch(invertNoteSort())
                    }
                    dispatch(changeNoteSort('ABC'))
                  }
                } else if (item === 'Dark') {
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
        tabIndex="0"
        className="header__dd-button"
        onClick={() => {
          dispatch(onMenuBlock(name))
        }}
        onMouseEnter={() => {
          if (headerMenuOpen) dispatch(onMenuBlock(name))
        }}
      >
        {blockName}
      </div>
    )
}

export default HeaderMenuBlock
