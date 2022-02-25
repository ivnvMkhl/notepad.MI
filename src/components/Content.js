import React from 'react'
import ContentNoteContent from './ContentNoteContent'
import ContentNoteHeader from './ContentNoteHeader'

const Content = ({ saveNote, closeNote, deleteNote, setUsedHeader, setAreaLength, setUsedContent }) => {
  return (
    <header className="content">
      <ContentNoteHeader deleteNote={deleteNote} saveNote={saveNote} closeNote={closeNote} setUsedHeader={setUsedHeader} />
      <ContentNoteContent setAreaLength={setAreaLength} setUsedContent={setUsedContent} />
    </header>
  )
}

export default Content
