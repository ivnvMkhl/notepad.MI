import React from 'react'

const NavFind = () => {
  return (
    <div className="navigation__find-block">
      <div className="navigation__find-icon">
        <svg version="1.1" viewBox="0 0 21 21">
          <path d="M20.18,18.61,15.07,13.5A8.11,8.11,0,0,0,2.87,2.87a8.11,8.11,0,0,0-.38,11.06,8.11,8.11,0,0,0,11,1.14l5.11,5.11h0a1.12,1.12,0,0,0,.78.32,1.14,1.14,0,0,0,.78-.32,1.11,1.11,0,0,0,0-1.57ZM2.81,8.66a5.85,5.85,0,1,1,10,4.1h-.06v0a5.84,5.84,0,0,1-8.24,0A5.85,5.85,0,0,1,2.81,8.66Z" />
        </svg>
      </div>
      <input type="text" maxLength="20" className="navigation__find-input" placeholder="find" />
    </div>
  )
}

export default NavFind
