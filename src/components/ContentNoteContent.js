import { connect } from 'react-redux'
import { setUsedNote } from '../redux/actions'

const ContentNoteContent = ({ areaLength, usedNote, setUsedNote }) => {
  return (
    <div className="content__note-content">
      <textarea
        rows="20"
        maxLength="1000"
        className="content__note-area"
        placeholder="Enter the content of the new note ..."
        value={usedNote.usedContent}
        onInput={(event) => {
          setUsedNote({
            usedId: 777,
            usedHeader: 'fuck',
            usedContent: 'fuck',
          })
          areaLength = document.querySelector('.content__note-area').textLength
          console.log(areaLength)
        }}
      />
      <div className="content__note-info">Symbols: {areaLength}, Size: , ServerSync: false</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    areaLength: state.notes.noteParams.areaLength,
    usedNote: state.notes.usedNote,
  }
}

const mapDispatchToProps = {
  setUsedNote,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentNoteContent)
