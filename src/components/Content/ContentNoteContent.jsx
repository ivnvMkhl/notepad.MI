import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeUsedNote } from '../../redux/actions'

const ContentNoteContent = () => {
  const dispatch = useDispatch()
  const usedNote = useSelector((state) => state.note.usedNote)
  const usedContent = useSelector((state) => state.note.usedNote.usedContent)
  const usedDate = useSelector((state) => state.note.usedNote.usedDate)
  const usedChange = useSelector((state) => state.note.usedNote.usedChange)

  let infoTime = '',
    infoDate = '',
    infoChangeTime = '',
    infoChangeDate = '',
    infoDateString = '',
    infoChangeString = ''

  if (usedDate !== null || usedChange !== null) {
    infoTime = `${usedDate.getHours() > 9 ? usedDate.getHours() : `0${usedDate.getHours()}`}:${
      usedDate.getMinutes() > 9 ? usedDate.getMinutes() : `0${usedDate.getMinutes()}`
    }`
    infoDate = `${usedDate.getDate()}.${
      usedDate.getMonth() + 1 > 9 ? usedDate.getMonth() + 1 : `0${usedDate.getMonth() + 1}`
    }.${usedDate.getFullYear()}`

    infoChangeTime = `${usedChange.getHours() > 9 ? usedChange.getHours() : `0${usedChange.getHours()}`}:${
      usedChange.getMinutes() > 9 ? usedChange.getMinutes() : `0${usedChange.getMinutes()}`
    }`
    infoChangeDate = `${usedChange.getDate()}.${
      usedChange.getMonth() + 1 > 9 ? usedChange.getMonth() + 1 : `0${usedChange.getMonth() + 1}`
    }.${usedChange.getFullYear()}`

    if (infoTime !== '' && infoDate !== '') {
      infoDateString = `Create: ${infoTime} ${infoDate}`
    } else infoDateString = ''

    if (infoChangeTime !== infoTime || infoChangeDate !== infoDate) {
      infoChangeString = `Change: ${infoChangeTime} ${infoChangeDate}`
    } else infoChangeString = ''
  }

  return (
    <div className="content__note-content">
      <textarea
        className="content__note-area"
        placeholder="Enter the content of the new note ..."
        value={usedContent}
        onInput={(event) => {
          dispatch(changeUsedNote({ ...usedNote, usedContent: event.target.value }))
        }}
      />

      <div className="content__note-info">
        Symbols: {usedContent.length}&nbsp;&nbsp;&nbsp;
        {infoDateString}&nbsp;&nbsp;
        {infoChangeString}&nbsp;&nbsp;
      </div>
    </div>
  )
}

export default ContentNoteContent
