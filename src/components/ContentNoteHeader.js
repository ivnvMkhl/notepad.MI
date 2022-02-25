import { connect } from 'react-redux'

const ContentNoteHeader = ({ deleteNote, saveNote, closeNote, usedHeader }) => {
  return (
    <div className="content__note-header">
      <textarea
        rows="1"
        maxLength="150"
        className="content__header-input"
        placeholder="Name of the new note ..."
        value={usedHeader}
        onInput={(event) => {
          usedHeader = event.target.value
        }}
      />
      <div className="selected-bar">
        <button className="selected-bar__bar-button" onClick={() => deleteNote()}>
          D
        </button>
        <button
          className="selected-bar__close-button"
          onClick={() => {
            saveNote()
            closeNote()
          }}
        >
          X
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    usedHeader: state.notes.usedNote.usedHeader,
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentNoteHeader)
