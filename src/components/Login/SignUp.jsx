import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { getUser } from '../../redux/actions'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()
  let authUser

  const signUp = (email, password) => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => (authUser = user.accessToken))
      .catch()
    // dispatch(
    //   getUser({
    //     email: authUser.email,
    //     token: authUser.accessToken,
    //     id: authUser.uid,
    //   })
    // )
    console.log(authUser)
  }

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button
        onClick={() => {
          signUp(email, pass)
        }}
      >
        Sign up
      </button>
      <p>
        Alredy have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  )
}

export default SignUp
