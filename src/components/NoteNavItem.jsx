import React from 'react'

const NoteNavItem = (props) => {
  return (
    <button className="noteItem">
      <div className="noteItemHeader">{props.noteHeader}</div>
      <div className="noteItemCutContent">{props.noteContentCut}</div>
    </button>
  )
}

export default NoteNavItem
