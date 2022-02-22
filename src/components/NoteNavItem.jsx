import React from 'react'

const NoteNavItem = (props) => {
  return (
    <button
      className="note-item"
      onClick={() => {
        props.selectNote(props.noteId) //return ID selected note
        // идет по всем note-item, меняет цвет фона у выбранного и отменяет у всех остальных
        let i = 0
        for (let elem of document.querySelectorAll('.note-item')) {
          i === props.noteId ? (elem.className = 'note-item note-item_select') : (elem.className = 'note-item')
          i++
        }
      }}
    >
      <div className="note-item_header">{props.noteHeader}</div>
      <div className="note-item_cut-content">{props.noteContentCut}</div>
    </button>
  )
}

export default NoteNavItem
