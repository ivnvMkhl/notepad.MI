import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/actions'

const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signIn = (email, password) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user.email, user.accessToken, user.uid)

        navigate('/')
      })
      .catch(dispatch({ type: 'APP/SHOW_ALERT_SIGNIN' }))
  }

  return (
    <div>
      <h1>Sign In</h1>
      <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button
        onClick={() => {
          signIn(email, pass)
        }}
      >
        Sign in
      </button>
      <p>
        or <Link to="/registration">Sign Up</Link>
      </p>
    </div>
  )
}

export default Login
