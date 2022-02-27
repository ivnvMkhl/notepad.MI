import React from 'react'
import './content.scss'
import ContentNoteContent from './ContentNoteContent'
import ContentNoteHeader from './ContentNoteHeader'

const Content = () => {
  return (
    <header className="content">
      <ContentNoteHeader />
      <ContentNoteContent />
    </header>
  )
}

export default Content
