import React from 'react'
import NoteNavItem from './NoteNavItem'

const Navigation = ({ usedNote, notesList, getSelectNote, createNote, saveNote, closeNote }) => {
  return (
    <nav className="navigation">
      <button
        className="navigation__crate-button"
        onClick={() => {
          if (usedNote !== -1) {
            saveNote()
            closeNote()
          } else createNote()
        }}
      >
        Create Note
      </button>
      <div className="navigation__find-block">
        <div className="navigation__find-icon">
          <svg version="1.1" viewBox="0 0 21 21">
            <path d="M20.18,18.61,15.07,13.5A8.11,8.11,0,0,0,2.87,2.87a8.11,8.11,0,0,0-.38,11.06,8.11,8.11,0,0,0,11,1.14l5.11,5.11h0a1.12,1.12,0,0,0,.78.32,1.14,1.14,0,0,0,.78-.32,1.11,1.11,0,0,0,0-1.57ZM2.81,8.66a5.85,5.85,0,1,1,10,4.1h-.06v0a5.84,5.84,0,0,1-8.24,0A5.85,5.85,0,0,1,2.81,8.66Z" />
          </svg>
        </div>
        <input type="text" maxLength="20" className="navigation__find-input" placeholder="find" />
      </div>
      <div className="navigation__fiter-bar">
        <div className="navigation__fiter-icon">
          <svg version="1.1" viewBox="0 0 21 21">
            <path d="M20.5,4.89a1.11,1.11,0,0,1-.33.79,1.08,1.08,0,0,1-.78.32h-.46V19.39a1.12,1.12,0,0,1-1.67,1,1.11,1.11,0,0,1-.55-1V6h-.46a1.11,1.11,0,0,1-1-1.66,1.09,1.09,0,0,1,1-.56h.46V1.61a1.11,1.11,0,0,1,1.66-1,1.1,1.1,0,0,1,.56,1V3.78h.46a1.09,1.09,0,0,1,.78.33,1.11,1.11,0,0,1,.33.78ZM12.07,15h-.46V1.61a1.11,1.11,0,0,0-.55-1,1.12,1.12,0,0,0-1.12,0,1.11,1.11,0,0,0-.55,1V15H8.93a1.11,1.11,0,0,0-1,1.66,1.1,1.1,0,0,0,1,.56h.46v2.17a1.11,1.11,0,0,0,.55,1,1.12,1.12,0,0,0,1.12,0,1.11,1.11,0,0,0,.55-1V17.22h.46a1.12,1.12,0,0,0,1-1.67,1.11,1.11,0,0,0-1-.55ZM4.75,8.65H4.29v-7a1.11,1.11,0,0,0-1.66-1,1.1,1.1,0,0,0-.56,1v7H1.61a1.11,1.11,0,0,0-1,1.66,1.1,1.1,0,0,0,1,.56h.46v8.52a1.12,1.12,0,0,0,1.67,1,1.11,1.11,0,0,0,.55-1V10.87h.46a1.09,1.09,0,0,0,1-.56,1.11,1.11,0,0,0-1-1.66Z" />
          </svg>
        </div>
        <div className="navigation__fiter-icon">
          <svg version="1.1" viewBox="0 0 21 21">
            <path d="M8.16,9.27H1.61a1.09,1.09,0,0,1-.78-.33A1.09,1.09,0,0,1,.5,8.16V1.61A1.09,1.09,0,0,1,.83.83,1.09,1.09,0,0,1,1.61.5H8.16a1.09,1.09,0,0,1,.78.33,1.09,1.09,0,0,1,.33.78V8.16A1.13,1.13,0,0,1,8.16,9.27ZM2.72,7.05H7.05V2.72H2.72ZM19.39,9.27H12.84a1.13,1.13,0,0,1-1.11-1.11V1.61a1.09,1.09,0,0,1,.33-.78A1.09,1.09,0,0,1,12.84.5h6.55a1.09,1.09,0,0,1,.78.33,1.09,1.09,0,0,1,.33.78V8.16a1.13,1.13,0,0,1-1.11,1.11ZM14,7.05h4.33V2.72H14ZM8.16,20.5H1.61a1.09,1.09,0,0,1-.78-.33,1.09,1.09,0,0,1-.33-.78V12.84a1.09,1.09,0,0,1,.33-.78,1.09,1.09,0,0,1,.78-.33H8.16a1.13,1.13,0,0,1,1.11,1.11v6.55A1.13,1.13,0,0,1,8.16,20.5ZM2.72,18.28H7.05V14H2.72ZM19.39,20.5H12.84a1.13,1.13,0,0,1-1.11-1.11V12.84a1.13,1.13,0,0,1,1.11-1.11h6.55a1.13,1.13,0,0,1,1.11,1.11v6.55a1.13,1.13,0,0,1-1.11,1.11ZM14,18.28h4.33V14H14Z" />
          </svg>
        </div>
      </div>
      <div className="navigation__note-list">
        {notesList.map((n) => (
          <NoteNavItem
            noteHeader={n.noteHeader.length > 14 ? `${n.noteHeader.slice(0, 11)}...` : n.noteHeader}
            noteContentCut={n.noteContent.length > 25 ? `${n.noteContent.slice(0, 18)}...` : n.noteContent}
            noteId={n.noteId}
            noteDate={n.noteDate}
            noteSelected={n.noteSelected}
            key={n.noteId}
            getSelectNote={getSelectNote}
          />
        ))}
      </div>
    </nav>
  )
}

export default Navigation
