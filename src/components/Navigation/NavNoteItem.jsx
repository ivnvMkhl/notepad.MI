import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSelectNote } from '../../redux/note_reducer/noteActions'

const NavNoteItem = ({ noteId, noteHeader, noteContentCut, noteDate, noteSelected, noteChange }) => {
  const dispatch = useDispatch()
  const displayBttnFlag = useSelector((state) => state.app.appParams.displayBttnFlag)

  let classes = []
  if (displayBttnFlag) {
    classes.push('note-item_small')
  }
  if (noteSelected) {
    classes.push('note-item_select')
  }

  let infoDate, infoTime
  if (noteChange > noteDate) {
    infoTime = `Change:   ${noteChange.getHours() > 9 ? noteChange.getHours() : `0${noteChange.getHours()}`}:${
      noteChange.getMinutes() > 9 ? noteChange.getMinutes() : `0${noteChange.getMinutes()}`
    }`
    infoDate = `${noteChange.getDate()}.${
      noteDate.getMonth() + 1 > 9 ? noteDate.getMonth() + 1 : `0${noteDate.getMonth() + 1}`
    }.${noteChange.getFullYear()}`
  } else {
    infoTime = `${noteDate.getHours() > 9 ? noteDate.getHours() : `0${noteDate.getHours()}`}:${
      noteDate.getMinutes() > 9 ? noteDate.getMinutes() : `0${noteDate.getMinutes()}`
    }`
    infoDate = `${noteDate.getDate()}.${
      noteDate.getMonth() + 1 > 9 ? noteDate.getMonth() + 1 : `0${noteDate.getMonth() + 1}`
    }.${noteDate.getFullYear()}`
  }

  return (
    <button
      className={`note-item ${classes.join(' ')}`}
      onClick={() => {
        dispatch(getSelectNote(noteId))
      }}
    >
      <div className="note-item__header">{noteHeader}</div>
      <span className="note-item__cut-content">{noteContentCut}</span>
      <span className="note-item__date">
        {infoTime} {infoDate}
      </span>
    </button>
  )
}

export default NavNoteItem
