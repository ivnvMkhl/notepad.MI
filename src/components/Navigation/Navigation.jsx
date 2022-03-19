import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeNote, createNote, saveNote } from '../../redux/note_reducer/noteActions'
import { showAlert } from '../../redux/app_reducer/appActions'
import './style/navigation.scss'
import NavSortBar from './NavSortBar'
import NavNotesList from './NavNotesList'
import NavSortModal from './NavSortModal'

const Navigation = () => {
  const dispatch = useDispatch()
  const usedId = useSelector((state) => state.note.usedNote.usedId)
  const usedHeader = useSelector((state) => state.note.usedNote.usedHeader)
  const usedContent = useSelector((state) => state.note.usedNote.usedContent)
  const uid = useSelector((state) => state.user.uid)
  const notesList = useSelector((state) => state.note.notesList)

  return (
    <nav className="navigation">
      <button
        className="navigation__crate-button"
        onClick={() => {
          if (usedId === -1) {
            if (usedContent.trim() === '' && usedHeader.trim() === '') {
              document.querySelector('.content__note-area').focus()
              dispatch(showAlert('warn', 'Enter note header or content...'))
            } else {
              dispatch(createNote(uid, usedHeader, usedContent))
            }
          } else {
            dispatch(saveNote(uid, usedId, usedHeader, usedContent, notesList))
            dispatch(closeNote())
            document.querySelector('.content__note-area').focus()
          }
        }}
      >
        Create Note
      </button>
      {/* <NavFind /> */}
      <NavSortBar />
      <NavSortModal />
      <NavNotesList />
    </nav>
  )
}

export default Navigation
