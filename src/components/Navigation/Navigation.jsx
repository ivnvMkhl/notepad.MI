import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeNote, createNote, saveNote } from '../../redux/actions'
import './style/navigation.scss'
import NavSortBar from './NavSortBar'
import NavFind from './NavFind'
import NavNotesList from './NavNotesList'
import NavSortModal from './NavSortModal'

const Navigation = () => {
  const dispatch = useDispatch()
  const usedId = useSelector((state) => state.note.usedNote.usedId)
  const usedHeader = useSelector((state) => state.note.usedNote.usedHeader)
  const usedContent = useSelector((state) => state.note.usedNote.usedContent)
  const uid = useSelector((state) => state.user.uid)

  return (
    <nav className="navigation">
      <button
        className="navigation__crate-button"
        onClick={() => {
          if (usedId === -1) {
            usedHeader ? dispatch(createNote(uid, usedHeader, usedContent)) : dispatch({ type: 'SHOW_ALERT' })
          } else {
            dispatch(saveNote(uid, usedId, usedHeader, usedContent))
            dispatch(closeNote())
          }
        }}
      >
        Create Note
      </button>
      <NavFind />
      <NavSortBar />
      <NavSortModal />
      <NavNotesList />
    </nav>
  )
}

export default Navigation
