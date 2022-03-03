import { useSelector } from 'react-redux'
import NavNoteItem from './NavNoteItem'
import './style/navNotesList.scss'

const NavNoteList = () => {
  const notesList = useSelector((state) => state.notesList)
  const sortType = useSelector((state) => state.appParams.sortType)
  const invertSortFlag = useSelector((state) => state.appParams.invertSortFlag)

  if (!notesList.length) {
    return (
      <div className="navigation__note-list">
        <p className="navigation__not-notes">Not notes</p>
      </div>
    )
  }

  //sort type set
  //types: update, date, size, abc,
  if (sortType === 'update') {
    notesList.sort((a, b) => {
      return b.noteChange - a.noteChange
    })
  } else if (sortType === 'date') {
    notesList.sort((a, b) => {
      return b.noteDate - a.noteDate
    })
  } else if (sortType === 'size') {
    notesList.sort((a, b) => {
      return b.noteContent.length - a.noteContent.length
    })
  } else if (sortType === 'abc') {
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
      {notesList.map((n) => (
        <NavNoteItem
          noteHeader={n.noteHeader.length > 14 ? `${n.noteHeader.slice(0, 11)}...` : n.noteHeader}
          noteContentCut={n.noteContent.length > 25 ? `${n.noteContent.slice(0, 18)}...` : n.noteContent}
          noteContent={n.noteContent}
          noteId={n.noteId}
          noteDate={n.noteDate}
          noteChange={n.noteChange}
          noteSelected={n.noteSelected}
          key={n.noteId}
        />
      ))}
    </div>
  )
}

export default NavNoteList
