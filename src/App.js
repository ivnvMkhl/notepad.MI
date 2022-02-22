import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'

function App() {
  let [notesList, setNotesList] = useState([
    {
      noteId: 0,
      noteHeader: 'Note One',
      noteContent: '1 Description one more description one more description one more description one more description',
      noteSelected: false,
    },
    {
      noteId: 1,
      noteHeader: 'Note Two',
      noteContent: '2 Description one more description one more description one more description one more description',
      noteSelected: false,
    },
    {
      noteId: 2,
      noteHeader: 'Note Tree',
      noteContent: '3 Description one more description one more description one more description one more description',
      noteSelected: false,
    },
  ])

  let [usedNote, setUsedNote] = useState({
    noteId: 1,
    noteHeader: 'start used Header',
    noteContent: 'start used Content',
  })

  const getSelectNote = (usedId) => {
    setUsedNote(notesList[usedId])

    setNotesList(
      notesList.map((notesList) => {
        notesList.noteId === usedId ? (notesList.noteSelected = !notesList.noteSelected) : (notesList.noteSelected = false)
        return notesList
      })
    )
  }

  return (
    <div className="wrapper">
      <Header />
      <Navigation notesList={notesList} getSelectNote={getSelectNote} setNotesList={setNotesList} />
      <Content usedNote={usedNote} />
    </div>
  )
}

export default App

// appRef https://notepadonline.ru/app
