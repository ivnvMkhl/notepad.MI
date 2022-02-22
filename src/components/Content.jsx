import React, { useState } from 'react'

const Content = ({ usedNote }) => {
  let [areaLength, setAreaLength] = useState(0)
  let [headerInput, setHeaderInput] = useState('uldfh')

  return (
    <header className="content">
      <div className="content__note-header">
        <input type="text" maxLength="150" className="content__header-input" placeholder="Note Header" value={usedNote.noteHeader} />
      </div>
      <div className="content__note-content">
        <textarea
          rows="20"
          maxLength="1000"
          className="content__note-area"
          palaceholder="Note content ..."
          onChange={() => setAreaLength(document.querySelector('.content__note-area').textLength)}
          value={usedNote.noteContent}
        />
        <div className="content__note-info">Symbols: {areaLength}, Size: , ServerSync: false</div>
      </div>
    </header>
  )
}

export default Content
