import React, { useState } from 'react'

const Content = ({ usedNote }, props) => {
  let [areaLength, setAreaLength] = useState(0)

  return (
    <header className="mainContent">
      <div className="noteHeader">
        <input type="text" maxLength="150" className="noteHeaderInput" placeholder="Note Header" defaultValue={usedNote.usedNoteHeader} />
      </div>
      <div className="noteContent">
        <textarea
          rows="20"
          maxLength="1000"
          className="noteContentArea"
          palaceholder="Note content ..."
          onChange={() => setAreaLength(document.querySelector('.noteContentArea').textLength)}
          defaultValue={usedNote.usedNoteContent}
        />
        <div className="noteInfo">Symbols: {areaLength}, Size: , ServerSync: false</div>
      </div>
    </header>
  )
}

export default Content
