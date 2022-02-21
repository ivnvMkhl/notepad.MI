import React from 'react'

const NoteNavItem = (props) => {
  return (
    <button
      className="note-item"
      onClick={() => {
        props.usedNote(props.noteId)
        let i = 1
        for (let elem of document.querySelectorAll('.note-item')) {
          i === props.noteId ? (elem.className = 'note-item note-item_select') : (elem.className = 'note-item')
          i++
        }
        // if (document.querySelectorAll('.note-item')[props.noteId - 1].className === 'note-item') {
        //   document.querySelectorAll('.note-item')[props.noteId - 1].className = 'note-item note-item_select'
        // }
      }}
    >
      <div className="note-item_header">{props.noteHeader}</div>
      <div className="note-item_cut-content">{props.noteContentCut}</div>
    </button>
  )
}

export default NoteNavItem
