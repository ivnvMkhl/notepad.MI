import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'

function App() {
  let [notesList, setNotesList] = useState([
    {
      noteId: 1,
      noteHeader: 'Note One',
      noteContent: 'Description one more description one more description one more description one more description',
      noteSelected: false,
    },
    {
      noteId: 2,
      noteHeader: 'Note Two',
      noteContent: 'Description one more description one more description one more description one more description',
      noteSelected: false,
    },
    {
      noteId: 3,
      noteHeader: 'Note Tree',
      noteContent: 'Description one more description one more description one more description one more description',
      noteSelected: false,
    },
  ])

  let [usedNote, setUsedNote] = useState({
    usedNoteId: 1,
    usedNoteHeader: 'usedH',
    usedNoteContent: 'usedC',
  })

  const usedNoteSet = (usedFlagId) => {}

  return (
    <div className="wrapper">
      <Header />
      <Navigation notesList={notesList} usedNoteSet={usedNoteSet} />
      <Content usedNote={usedNote} />
    </div>
  )
}

export default App

// appRef https://notepadonline.ru/app
