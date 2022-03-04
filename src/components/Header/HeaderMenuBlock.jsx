import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { closeNote, createNote, deleteNote, onMenuBlock, saveNote } from '../../redux/actions'

const HeaderMenuBlock = ({ name, items, isOpen }) => {
  const dispatch = useDispatch()
  const headerMenuOpen = useSelector((state) => state.appParams.headerMenuOpen)
  const usedId = useSelector((state) => state.usedNote.usedId)
  const usedHeader = useSelector((state) => state.usedNote.usedHeader)

  if (isOpen) {
    return (
      <div className="header__dd-block">
        <button
          className="header__dd-button_select"
          onClick={() => {
            dispatch(onMenuBlock(name))
          }}
        >
          {name}
        </button>
        <div className="header__modal-container">
          {items.map((item) => (
            <buttons
              className="header__dd-items"
              key={item}
              onClick={() => {
                //Select action to click header menu
                if (item === 'Save') dispatch(saveNote())
                else if (item === 'Close') dispatch(closeNote())
                else if (item === 'Delete') dispatch(deleteNote())
                else if (item === 'Create') {
                  if (usedId === -1) {
                    usedHeader ? dispatch(createNote()) : dispatch({ type: 'SHOW_ALERT' })
                  }
                } else dispatch({ type: 'APP/UNDEFINDE_FUNC' })

                dispatch(onMenuBlock(name))
              }}
            >
              {item}
            </buttons>
          ))}
        </div>
      </div>
    )
  } else
    return (
      <button
        className="header__dd-button"
        onClick={() => {
          dispatch(onMenuBlock(name))
        }}
        onMouseEnter={() => {
          if (headerMenuOpen) dispatch(onMenuBlock(name))
        }}
      >
        {name}
      </button>
    )
}

export default HeaderMenuBlock
