import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signUpUser } from '../../redux/actions'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Create new account</h1>
      <input type="email" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={pass} placeholder="Password" onChange={(e) => setPass(e.target.value)} />
      <button
        onClick={() => {
          dispatch(signUpUser(email, pass))
          navigate('/')
        }}
      >
        Registration
      </button>
      <p>
        Alredy have an account? <Link to="/login">Log In</Link>
      </p>
    </div>
  )
}

export default SignUp
