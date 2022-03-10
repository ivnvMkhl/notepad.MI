import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInUser } from '../../redux/actions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const dispatch = useDispatch()

  return (
    <div className="login__wrapper">
      <div className="login__header">
        <div className="login__logo">
          <div className="login__app-label">
            <svg version="1.1" viewBox="0 0 21 21">
              <path d="M19.59,1.41a3.1,3.1,0,0,0-4.39,0l-8,8a1.11,1.11,0,0,0-.31.64l-.42,3.23a1.13,1.13,0,0,0,.27.88,1.11,1.11,0,0,0,.84.37h.14l3.23-.41a1.11,1.11,0,0,0,.64-.31l8-8a3.1,3.1,0,0,0,0-4.39ZM10.25,12l-1.43.19L9,10.75l5.27-5.27,1.24,1.25ZM18,4.23l-.93.93L15.84,3.91,16.77,3A.91.91,0,0,1,18,3a.85.85,0,0,1,.26.62.88.88,0,0,1-.26.63Zm1,7v8.15a1.13,1.13,0,0,1-1.11,1.11H1.61a1.09,1.09,0,0,1-.78-.33,1.09,1.09,0,0,1-.33-.78V3.09a1.09,1.09,0,0,1,.33-.78A1.09,1.09,0,0,1,1.61,2H9.76a1.12,1.12,0,0,1,1,1.67,1.11,1.11,0,0,1-1,.55h-7V18.28H16.8v-7a1.11,1.11,0,0,1,1.66-1,1.1,1.1,0,0,1,.56,1Z" />
            </svg>
          </div>
          <h1>notepad.MI</h1>
        </div>
        <h3>Login to your account</h3>
      </div>
      <div className="login__form">
        <input className="form__input" type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
        <input className="form__input" type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        <button
          className="form__button"
          onClick={() => {
            dispatch(signInUser(email, pass))
          }}
        >
          Sign in
        </button>
      </div>
      <div className="login__footer">
        <p>
          or <Link to="/registration">Create Account</Link>
        </p>
      </div>
    </div>
  )
}

export default Login
