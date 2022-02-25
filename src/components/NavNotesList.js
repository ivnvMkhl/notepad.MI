import { connect } from 'react-redux'
import NavNoteItem from './NavNoteItem'

const NavNoteList = ({ notesList, getSelectNote }) => {
  return (
    <div className="navigation__note-list">
      {notesList.map((n) => (
        <NavNoteItem
          noteHeader={n.noteHeader.length > 14 ? `${n.noteHeader.slice(0, 11)}...` : n.noteHeader}
          noteContentCut={n.noteContent.length > 25 ? `${n.noteContent.slice(0, 18)}...` : n.noteContent}
          noteId={n.noteId}
          noteDate={n.noteDate}
          noteSelected={n.noteSelected}
          key={n.noteId}
          getSelectNote={getSelectNote}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notesList: state.notes.notesList,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(NavNoteList)
