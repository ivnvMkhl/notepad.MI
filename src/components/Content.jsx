import React from 'react'

const Content = ({ notesList, usedId, areaLength, setAreaLength, saveNote, closeNote, deleteNote }) => {
  return (
    <header className="content">
      <div className="content__note-header">
        <input type="text" maxLength="150" className="content__header-input" placeholder="Name of the new note ..." />
        <div className="selected-bar">
          {/* <button className="selected-bar__bar-button" onClick={() => saveNote(usedId, notesList)}>
            S
          </button> */}
          <button className="selected-bar__bar-button" onClick={() => deleteNote(usedId)}>
            D
          </button>
          <button
            className="selected-bar__close-button"
            onClick={() => {
              saveNote(usedId, notesList)
              closeNote(usedId, notesList)
            }}
          >
            X
          </button>
        </div>
      </div>
      <div className="content__note-content">
        <textarea
          rows="20"
          maxLength="1000"
          className="content__note-area"
          placeholder="Enter the content of the new note ..."
          onInput={() => setAreaLength(document.querySelector('.content__note-area').textLength)}
        />
        <div className="content__note-info">Symbols: {areaLength}, Size: , ServerSync: false</div>
      </div>
    </header>
  )
}

export default Content
