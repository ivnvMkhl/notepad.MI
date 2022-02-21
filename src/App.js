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
      noteContent: '1 Description one more description one more description one more description one more description',
    },
    {
      noteId: 2,
      noteHeader: 'Note Two',
      noteContent: '2 Description one more description one more description one more description one more description',
    },
    {
      noteId: 3,
      noteHeader: 'Note Tree',
      noteContent: '3 Description one more description one more description one more description one more description',
    },
  ])

  let [usedNote, setUsedNote] = useState({
    noteId: 1,
    noteHeader: 'start used Header',
    noteContent: 'start used Content',
  })

  const usedNoteSet = (usedId) => {
    setUsedNote(notesList[usedId - 1])
    console.log(usedId - 1)
  }

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
