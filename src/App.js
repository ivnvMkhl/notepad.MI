import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'

function App() {
  //main state of notes
  let [notesList, setNotesList] = useState([
    {
      noteId: 1645721908699,
      noteHeader: 'Note One',
      noteContent: '1 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908699),
      noteSelected: false,
    },
    {
      noteId: 1645721908564,
      noteHeader: 'Note Two',
      noteContent: '2 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908564),
      noteSelected: false,
    },
    {
      noteId: 1645721908385,
      noteHeader: 'Note Tree',
      noteContent: '3 Description one more description one more description one more description one more description',
      noteDate: new Date(1645721908385),
      noteSelected: false,
    },
  ])

  //state of the selected note
  let [usedNote, setUsedNote] = useState(-1)
  let [usedHeader, setUsedHeader] = useState('')
  let [usedContent, setUsedContent] = useState('')
  //state area length
  let [areaLength, setAreaLength] = useState(0)

  //Works from clicking on the list of notes
  const getSelectNote = (selectId) => {
    //Update the data in the state of the selected note
    setUsedNote(selectId)
    setNotesList(
      notesList.map((notesList) => {
        if (notesList.noteId === selectId) {
          if (notesList.noteSelected === false) {
            //update the data on the content component if selected
            setUsedHeader(notesList.noteHeader)
            setUsedContent(notesList.noteContent)
            onSelectedBar()
            notesList.noteSelected = !notesList.noteSelected
          } else {
            //erase the data on the content component if unselected
            setUsedHeader('')
            setUsedContent('')
            offSelectedBar()
            notesList.noteSelected = !notesList.noteSelected
            usedNote = -1
          }
        } else {
          notesList.noteSelected = false
        }
        return notesList
      })
    )
    setAreaLength(document.querySelector('.content__note-area').textLength)
  }
  const closeNote = () => {
    setUsedNote(-1)
    setUsedHeader('')
    setUsedContent('')
    offSelectedBar()
    notesList.map((note) => (note.noteSelected = false))
    setAreaLength(document.querySelector('.content__note-area').textLength)
  }
  const saveNote = () => {
    notesList.map((note) => {
      if (note.noteId === usedNote) {
        note.noteHeader = usedHeader
        note.noteContent = usedContent
      }
    })
    setAreaLength(document.querySelector('.content__note-area').textLength)
  }
  const createNote = () => {
    if (usedHeader.trim() !== '') {
      let newId = Date.now()
      setNotesList(
        notesList.concat([
          {
            noteId: newId,
            noteHeader: usedHeader,
            noteContent: usedContent,
            noteDate: new Date(newId),
            noteSelected: true,
          },
        ])
      )

      setUsedNote(newId)
      onSelectedBar()
    } else setUsedHeader('')
  }
  const onSelectedBar = () => {
    document.querySelector('.content__header-input').className = 'content__header-input content__header-input_noteEdit'
    document.querySelector('.selected-bar').style = 'display: flex'
  }
  const offSelectedBar = () => {
    document.querySelector('.content__header-input').className = 'content__header-input'
    document.querySelector('.selected-bar').style = 'display: none'
  }
  const deleteNote = () => {
    setNotesList(notesList.filter((note) => note.noteId !== usedNote))
    setUsedHeader('')
    setUsedContent('')
    offSelectedBar()
    setAreaLength(document.querySelector('.content__note-area').textLength)
  }

  return (
    <div className="wrapper">
      <Header />
      <Navigation
        usedNote={usedNote}
        notesList={notesList}
        getSelectNote={getSelectNote}
        createNote={createNote}
        saveNote={saveNote}
        closeNote={closeNote}
      />
      <Content
        areaLength={areaLength}
        setAreaLength={setAreaLength}
        saveNote={saveNote}
        closeNote={closeNote}
        deleteNote={deleteNote}
        usedHeader={usedHeader}
        setUsedHeader={setUsedHeader}
        usedContent={usedContent}
        setUsedContent={setUsedContent}
      />
    </div>
  )
}

export default App

// appRef https://notepadonline.ru/app
