import React from 'react'
import { useDispatch } from 'react-redux'
import { getSelectNote, getTextLength } from '../redux/actions'

const NavNoteItem = ({ noteId, noteHeader, noteContentCut, noteDate, noteSelected, noteContent }) => {
  const dispatch = useDispatch()

  let classes = []
  if (noteSelected) {
    classes.push('note-item_select')
  }

  return (
    <button
      className={`note-item ${classes.join(' ')}`}
      onClick={() => {
        dispatch(getSelectNote(noteId))
        dispatch(getTextLength(noteContent.length))
      }}
    >
      <div className="note-item__header">{noteHeader}</div>
      <div className="note-item__cut-content">{noteContentCut}</div>
      <div className="note-item__date">{`${noteDate.getHours()}:${noteDate.getMinutes()}  ${noteDate.getDate()}.${noteDate.getMonth()}.${noteDate.getFullYear()}`}</div>
    </button>
  )
}

export default NavNoteItem
