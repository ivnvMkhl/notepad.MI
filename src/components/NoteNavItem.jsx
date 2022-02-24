import React from 'react'

const NoteNavItem = ({ noteId, noteHeader, noteContentCut, noteSelected, getSelectNote, noteDate }) => {
  let classes = []

  if (noteSelected) {
    classes.push('note-item_select')
  }

  return (
    <button
      className={`note-item ${classes.join(' ')}`}
      onClick={() => {
        getSelectNote(noteId)
      }}
    >
      <div className="note-item__header">{noteHeader}</div>
      <div className="note-item__cut-content">{noteContentCut}</div>
      <div className="note-item__date">{`${noteDate.getHours()}:${noteDate.getMinutes()}  ${noteDate.getDate()}.${noteDate.getMonth()}.${noteDate.getFullYear()}`}</div>
    </button>
  )
}

export default NoteNavItem
