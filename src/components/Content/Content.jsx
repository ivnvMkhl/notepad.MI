import React from 'react'
import './style/content.scss'
import ContentNoteContent from './ContentNoteContent'
import ContentNoteHeader from './ContentNoteHeader'

const Content = () => {
  return (
    <div className="content">
      <ContentNoteHeader />
      <ContentNoteContent />
    </div>
  )
}

export default Content
