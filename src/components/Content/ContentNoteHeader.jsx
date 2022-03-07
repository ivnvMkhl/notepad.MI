import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsedNote, closeNote, deleteNote, saveNote } from '../../redux/actions'

const ContentNoteHeader = () => {
  const dispatch = useDispatch(),
    usedNote = useSelector((state) => state.note.usedNote),
    usedHeader = useSelector((state) => state.note.usedNote.usedHeader),
    usedContent = useSelector((state) => state.note.usedNote.usedContent),
    usedId = useSelector((state) => state.note.usedNote.usedId),
    uid = useSelector((state) => state.user.uid)

  return (
    <div className="content__note-header">
      <input
        type="text"
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
            dispatch(deleteNote(uid, usedId))
          }}
        >
          <div style={{ width: '19px', height: '19px' }}>
            <svg style={{ fill: 'var(--text-color)' }} version="1.1" viewBox="0 0 62.36 62.36">
              <path d="M52.18,12.91h-42a3.15,3.15,0,0,0,0,6.3h1.05V56.38a3.19,3.19,0,0,0,.93,2.23,3.14,3.14,0,0,0,2.22.92H48a3.14,3.14,0,0,0,3.15-3.15V19.21h1a3.15,3.15,0,0,0,0-6.3ZM44.83,53.23H17.53v-34h27.3ZM19.21,6a3.11,3.11,0,0,1,.93-2.22,3.15,3.15,0,0,1,2.22-.93H40a3.15,3.15,0,1,1,0,6.3H22.36A3.16,3.16,0,0,1,19.21,6Zm2.73,38.64V27.82a3.15,3.15,0,1,1,6.3,0v16.8a3.15,3.15,0,0,1-6.3,0Zm12.18,0V27.82a3.15,3.15,0,1,1,6.3,0v16.8a3.15,3.15,0,0,1-6.3,0Z" />
            </svg>
          </div>
        </button>
        <button
          className="selected-bar__bar-button selected-bar__bar-button_end"
          onClick={() => {
            dispatch(saveNote(uid, usedId, usedHeader, usedContent))
            dispatch(closeNote())
          }}
        >
          <div style={{ width: '17px', height: '17px' }}>
            <svg style={{ fill: 'var(--text-color)' }} version="1.1" viewBox="0 0 62.36 62.36">
              <path d="M52.19,51.82a2.83,2.83,0,0,1-4,4L27.51,35.15,6.84,55.82a2.82,2.82,0,0,1-4,0,2.8,2.8,0,0,1,0-4L23.51,31.15,2.84,10.48a2.83,2.83,0,0,1,4-4L27.51,27.14,48.18,6.47a2.84,2.84,0,0,1,4,4L31.52,31.15Z" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}

export default ContentNoteHeader
