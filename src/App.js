import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'

function App() {
  //main state of notes
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

  //state of the selected note
  let [usedNote, setUsedNote] = useState({
    noteId: -1,
  })

  let [areaLength, setAreaLength] = useState(0)

  //Works from clicking on the list of notes
  const getSelectNote = (usedId) => {
    //Update the data in the state of the selected note
    usedNote.noteId = usedId

    setNotesList(
      notesList.map((notesList) => {
        if (notesList.noteId === usedId) {
          if (notesList.noteSelected === false) {
            //update the data on the content component if selected
            document.querySelector('.content__header-input').value = notesList.noteHeader
            document.querySelector('.content__note-area').value = notesList.noteContent

            notesList.noteSelected = !notesList.noteSelected

            document.querySelector('.content__header-input').className = 'content__header-input content__header-input_noteEdit'
            document.querySelector('.selected-bar').style = 'display: flex'
          } else {
            //erase the data on the content component if unselected
            document.querySelector('.content__header-input').value = ''
            document.querySelector('.content__note-area').value = ''

            notesList.noteSelected = !notesList.noteSelected
            usedNote.noteId = -1

            document.querySelector('.content__header-input').className = 'content__header-input'
            document.querySelector('.selected-bar').style = 'display: none'
          }
        } else {
          notesList.noteSelected = false
        }
        return notesList
      })
    )
    setAreaLength(document.querySelector('.content__note-area').textLength)
  }

  const closeNote = (usedId, notesList) => {
    usedNote.noteId = -1
    usedId = -1

    document.querySelector('.content__header-input').value = ''
    document.querySelector('.content__note-area').value = ''
    document.querySelector('.content__header-input').className = 'content__header-input'
    document.querySelector('.selected-bar').style = 'display: none'
    notesList.map((note) => (note.noteSelected = false))
    setAreaLength(document.querySelector('.content__note-area').textLength)
  }

  const saveNote = (usedId, notesList) => {
    notesList[usedId].noteHeader = document.querySelector('.content__header-input').value
    notesList[usedId].noteContent = document.querySelector('.content__note-area').value
    setAreaLength(document.querySelector('.content__note-area').textLength)
  }

  const createNote = (usedId, notesList) => {
    if (document.querySelector('.content__header-input').value.trim() !== '') {
      notesList.push({
        noteId: Date.now(),
        noteHeader: document.querySelector('.content__header-input').value,
        noteContent: document.querySelector('.content__note-area').value,
        noteSelected: true,
      })
      getSelectNote()
      getSelectNote(notesList.length - 1)
    } else document.querySelector('.content__header-input').value = ''

    console.log(notesList)
  }

  const deleteNote = (usedId) => {
    setNotesList(notesList.filter((note) => note.noteId !== usedId))
    document.querySelector('.content__header-input').value = ''
    document.querySelector('.content__note-area').value = ''
    document.querySelector('.content__header-input').className = 'content__header-input'
    document.querySelector('.selected-bar').style = 'display: none'
    setAreaLength(document.querySelector('.content__note-area').textLength)
  }

  return (
    <div className="wrapper">
      <Header />
      <Navigation
        usedId={usedNote.noteId}
        notesList={notesList}
        getSelectNote={getSelectNote}
        saveNote={saveNote}
        closeNote={closeNote}
        createNote={createNote}
      />
      <Content
        notesList={notesList}
        usedId={usedNote.noteId}
        areaLength={areaLength}
        setAreaLength={setAreaLength}
        saveNote={saveNote}
        closeNote={closeNote}
        deleteNote={deleteNote}
      />
    </div>
  )
}

export default App

// appRef https://notepadonline.ru/app
