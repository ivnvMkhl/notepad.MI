import React from 'react'

const Content = ({ areaLength, setAreaLength, saveNote, closeNote, deleteNote, usedHeader, setUsedHeader, usedContent, setUsedContent }) => {
  return (
    <header className="content">
      <div className="content__note-header">
        <textarea
          rows="1"
          maxLength="150"
          className="content__header-input"
          placeholder="Name of the new note ..."
          value={usedHeader}
          onInput={(event) => {
            setUsedHeader(event.target.value)
          }}
        />
        <div className="selected-bar">
          <button className="selected-bar__bar-button" onClick={() => deleteNote()}>
            D
          </button>
          <button
            className="selected-bar__close-button"
            onClick={() => {
              saveNote()
              closeNote()
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
          value={usedContent}
          onInput={(event) => {
            setUsedContent(event.target.value)
            setAreaLength(document.querySelector('.content__note-area').textLength)
          }}
        />
        <div className="content__note-info">Symbols: {areaLength}, Size: , ServerSync: false</div>
      </div>
    </header>
  )
}

export default Content
