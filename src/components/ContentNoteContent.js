import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsedNote, getTextLength } from '../redux/actions'

const ContentNoteContent = () => {
  const dispatch = useDispatch()
  const usedNote = useSelector((state) => state.usedNote)
  const usedContent = useSelector((state) => state.usedNote.usedContent)
  const areaLength = useSelector((state) => state.noteParams.areaLength)

  return (
    <div className="content__note-content">
      <textarea
        rows="20"
        maxLength="1000"
        className="content__note-area"
        placeholder="Enter the content of the new note ..."
        value={usedContent}
        onInput={(event) => {
          dispatch(changeUsedNote({ ...usedNote, usedContent: event.target.value }))
          dispatch(getTextLength(event.target.value.length))
        }}
      />
      <div className="content__note-info">Symbols: {areaLength}, Size: , ServerSync: false</div>
    </div>
  )
}

export default ContentNoteContent
