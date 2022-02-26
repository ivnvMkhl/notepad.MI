import { useSelector } from 'react-redux'
import NavNoteItem from './NavNoteItem'

const NavNoteList = () => {
  const notesList = useSelector((state) => state.notesList)
  const sortFlag = useSelector((state) => state.noteParams.sortFlag)

  return (
    <div className="navigation__note-list">
      {notesList.map((n) => (
        <NavNoteItem
          noteHeader={n.noteHeader.length > 14 ? `${n.noteHeader.slice(0, 11)}...` : n.noteHeader}
          noteContentCut={n.noteContent.length > 25 ? `${n.noteContent.slice(0, 18)}...` : n.noteContent}
          noteContent={n.noteContent}
          noteId={n.noteId}
          noteDate={n.noteDate}
          noteSelected={n.noteSelected}
          key={n.noteId}
        />
      ))}
    </div>
  )
}

export default NavNoteList
