import { useDispatch, useSelector } from 'react-redux'
import { closeNote, createNote, saveNote } from '../../redux/note_reducer/noteActions'
import { showAlert } from '../../redux/app_reducer/appActions'
import Loader from '../Loader'
import NavNoteItem from './NavNoteItem'
import './style/navNotesList.scss'

const NavNoteList = () => {
  const notesList = useSelector((state) => state.note.notesList)
  const sortType = useSelector((state) => state.app.appParams.sortType)
  const invertSortFlag = useSelector((state) => state.app.appParams.invertSortFlag)
  const startFetchNotes = useSelector((state) => state.app.appParams.startFetchNotes)
  const dispatch = useDispatch()
  const usedId = useSelector((state) => state.note.usedNote.usedId)
  const usedHeader = useSelector((state) => state.note.usedNote.usedHeader)
  const usedContent = useSelector((state) => state.note.usedNote.usedContent)
  const uid = useSelector((state) => state.user.uid)

  let noNotes
  startFetchNotes ? (noNotes = <Loader />) : (noNotes = <p className="navigation__not-notes">No notes</p>)

  if (!notesList.length) {
    return (
      <div className="navigation__note-list">
        <button
          className="navigation__create-note"
          onClick={() => {
            if (usedId === -1) {
              if (usedContent.trim() === '') {
                document.querySelector('.content__note-area').focus()
                dispatch(showAlert('warn', 'Enter note content...'))
              } else {
                dispatch(createNote(uid, usedHeader, usedContent))
              }
            } else {
              dispatch(saveNote(uid, usedId, usedHeader, usedContent))
              dispatch(closeNote())
              document.querySelector('.content__note-area').focus()
            }
          }}
        >
          <div style={{ width: '20px', height: '20px' }}>
            <svg style={{ fill: 'var(--text-color)' }} version="1.1" viewBox="0 0 62.36 62.36">
              <path d="M2.83,12A3.16,3.16,0,0,1,6,8.82h50.4a3.15,3.15,0,0,1,0,6.3H6a3.14,3.14,0,0,1-2.22-.92A3.17,3.17,0,0,1,2.83,12ZM56.38,27.72H6A3.15,3.15,0,0,0,6,34h50.4a3.15,3.15,0,1,0,0-6.3ZM30.78,46.61H6a3.15,3.15,0,0,0,0,6.3h24.8a3.15,3.15,0,0,0,0-6.3Zm25.2,0H52.83V43.46a3.15,3.15,0,0,0-6.3,0v3.15H43.38a3.15,3.15,0,1,0,0,6.3h3.15v3.15a3.15,3.15,0,1,0,6.3,0V52.91H56a3.15,3.15,0,0,0,0-6.3Z" />
            </svg>
          </div>
        </button>
        {noNotes}
      </div>
    )
  }

  //sort type set
  //types: update, date, size, abc,
  if (sortType === 'Update') {
    notesList.sort((a, b) => {
      return b.noteChange - a.noteChange
    })
  } else if (sortType === 'Date') {
    notesList.sort((a, b) => {
      return b.noteDate - a.noteDate
    })
  } else if (sortType === 'Size') {
    notesList.sort((a, b) => {
      return b.noteContent.length - a.noteContent.length
    })
  } else if (sortType === 'ABC') {
    notesList.sort((a, b) => {
      if (a.noteHeader > b.noteHeader) {
        return 1
      }
      if (a.noteHeader < b.noteHeader) {
        return -1
      }
      return 0
    })
  }

  if (invertSortFlag) notesList.reverse()

  return (
    <div className="navigation__note-list">
      <button
        className="navigation__create-note"
        onClick={() => {
          if (usedId === -1) {
            if (usedContent.trim() === '') {
              document.querySelector('.content__note-area').focus()
            } else {
              dispatch(createNote(uid, usedHeader, usedContent))
            }
          } else {
            dispatch(saveNote(uid, usedId, usedHeader, usedContent))
            dispatch(closeNote())
            document.querySelector('.content__note-area').focus()
          }
        }}
      >
        <div style={{ width: '20px', height: '20px' }}>
          <svg style={{ fill: 'var(--text-color)' }} version="1.1" viewBox="0 0 62.36 62.36">
            <path d="M2.83,12A3.16,3.16,0,0,1,6,8.82h50.4a3.15,3.15,0,0,1,0,6.3H6a3.14,3.14,0,0,1-2.22-.92A3.17,3.17,0,0,1,2.83,12ZM56.38,27.72H6A3.15,3.15,0,0,0,6,34h50.4a3.15,3.15,0,1,0,0-6.3ZM30.78,46.61H6a3.15,3.15,0,0,0,0,6.3h24.8a3.15,3.15,0,0,0,0-6.3Zm25.2,0H52.83V43.46a3.15,3.15,0,0,0-6.3,0v3.15H43.38a3.15,3.15,0,1,0,0,6.3h3.15v3.15a3.15,3.15,0,1,0,6.3,0V52.91H56a3.15,3.15,0,0,0,0-6.3Z" />
          </svg>
        </div>
      </button>
      {notesList.map((n) => (
        <NavNoteItem
          noteHeader={n.noteHeader.length > 14 ? `${n.noteHeader.slice(0, 11)}...` : n.noteHeader}
          noteContentCut={n.noteContent.length > 25 ? `${n.noteContent.slice(0, 18)}...` : n.noteContent}
          noteContent={n.noteContent}
          noteId={n.noteId}
          noteDate={new Date(n.noteDate)}
          noteChange={new Date(n.noteChange)}
          noteSelected={n.noteSelected}
          key={n.noteId}
        />
      ))}
    </div>
  )
}

export default NavNoteList
