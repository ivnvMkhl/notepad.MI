import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsedNote, closeNote, deleteNote, saveNote } from '../redux/actions'

const ContentNoteHeader = () => {
  const dispatch = useDispatch()
  const usedNote = useSelector((state) => state.usedNote)
  const usedHeader = useSelector((state) => state.usedNote.usedHeader)
  const usedId = useSelector((state) => state.usedNote.usedId)

  return (
    <div className="content__note-header">
      <textarea
        rows="1"
        maxLength="150"
        className={usedId !== -1 ? `content__header-input content__header-input_activate` : `content__header-input`}
        placeholder="Name of the new note ..."
        value={usedHeader}
        onInput={(event) => {
          dispatch(changeUsedNote({ ...usedNote, usedHeader: event.target.value }))
        }}
      />
      <div className={usedId !== -1 ? `selected-bar selected-bar_activate` : `selected-bar`}>
        <button
          className="selected-bar__bar-button"
          onClick={() => {
            dispatch(deleteNote())
          }}
        >
          D
        </button>
        <button
          className="selected-bar__close-button"
          onClick={() => {
            dispatch(saveNote())
            dispatch(closeNote())
          }}
        >
          X
        </button>
      </div>
    </div>
  )
}

export default ContentNoteHeader
