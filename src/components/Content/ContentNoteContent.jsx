import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsedNote, getTextLength } from '../../redux/actions'

const ContentNoteContent = () => {
  const dispatch = useDispatch()
  const usedNote = useSelector((state) => state.note.usedNote)
  const usedContent = useSelector((state) => state.note.usedNote.usedContent)
  const areaLength = useSelector((state) => state.app.appParams.areaLength)
  const usedId = useSelector((state) => state.note.usedNote.usedId)
  const notesList = useSelector((state) => state.note.notesList)

  let infoTime = '',
    infoDate = '',
    infoChangeTime = '',
    infoChangeDate = '',
    infoDateString = '',
    infoChangeString = ''
  notesList.map((note) => {
    if (note.noteId === usedId) {
      infoTime = `${note.noteDate.getHours() > 9 ? note.noteDate.getHours() : `0${note.noteDate.getHours()}`}:${
        note.noteDate.getMinutes() > 9 ? note.noteDate.getMinutes() : `0${note.noteDate.getMinutes()}`
      }`
      infoDate = `${note.noteDate.getDate()}.${
        note.noteDate.getMonth() + 1 > 9 ? note.noteDate.getMonth() + 1 : `0${note.noteDate.getMonth() + 1}`
      }.${note.noteDate.getFullYear()}`

      infoChangeTime = `${note.noteChange.getHours() > 9 ? note.noteChange.getHours() : `0${note.noteChange.getHours()}`}:${
        note.noteChange.getMinutes() > 9 ? note.noteChange.getMinutes() : `0${note.noteChange.getMinutes()}`
      }`
      infoChangeDate = `${note.noteChange.getDate()}.${
        note.noteChange.getMonth() + 1 > 9 ? note.noteChange.getMonth() + 1 : `0${note.noteChange.getMonth() + 1}`
      }.${note.noteChange.getFullYear()}`
    }
  })

  if (infoTime !== '' && infoDate !== '') {
    infoDateString = `Create: ${infoTime} ${infoDate},`
  } else infoDateString = ''

  if (infoChangeTime !== infoTime || infoChangeDate !== infoDate) {
    infoChangeString = `Change: ${infoChangeTime} ${infoChangeDate}`
  } else infoChangeString = ''

  return (
    <div className="content__note-content">
      <textarea
        className="content__note-area"
        placeholder="Enter the content of the new note ..."
        value={usedContent}
        onInput={(event) => {
          dispatch(changeUsedNote({ ...usedNote, usedContent: event.target.value }))
          dispatch(getTextLength(event.target.value.length))
        }}
      />

      <div className="content__note-info">
        Symbols: {areaLength}&nbsp;&nbsp;&nbsp;
        {infoDateString}&nbsp;&nbsp;
        {infoChangeString}&nbsp;&nbsp;
      </div>
    </div>
  )
}

export default ContentNoteContent
