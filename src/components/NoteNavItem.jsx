import React from 'react'

const NoteNavItem = ({ noteId, noteHeader, noteContentCut, noteSelected, getSelectNote }) => {
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
      <div className="note-item_header">{noteHeader}</div>
      <div className="note-item_cut-content">{noteContentCut}</div>
    </button>
  )
}

export default NoteNavItem
