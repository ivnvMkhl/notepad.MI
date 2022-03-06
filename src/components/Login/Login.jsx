import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { signInUser } from '../../redux/actions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Log in to your account</h1>
      <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button
        onClick={() => {
          dispatch(signInUser(email, pass))
        }}
      >
        Log In
      </button>
      <p>
        or <Link to="/registration">Create Account</Link>
      </p>
    </div>
  )
}

export default Login
