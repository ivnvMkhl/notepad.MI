import React from 'react'
import './style/App.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import NotFound from './components/NotFound'
import SignUp from './components/Login/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login/Login'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { fetchNotes } from './redux/note_reducer/noteActions'
import { hideAuthLoader, reAuthCheck } from './redux/app_reducer/appActions'
import { SIGNIN_USER } from './redux/types'
import Loader from './components/Loader'
import Forgot from './components/Login/Forgot'

function App() {
  const auth = getAuth()
  const isAuth = useSelector((state) => state.user.isAuth)
  const authLoader = useSelector((state) => state.app.appParams.authLoader)
  const reAuthFlag = useSelector((state) => state.app.reAuthFlag)
  const dispatch = useDispatch()

  if (reAuthFlag || !isAuth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('Yes')
        dispatch({
          type: SIGNIN_USER,
          payload: user,
        })
        dispatch(fetchNotes(user))
        dispatch(reAuthCheck())
        dispatch(hideAuthLoader())
      } else {
        console.log('No')
        dispatch(hideAuthLoader())
        dispatch(reAuthCheck())
      }
    })
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          authLoader ? (
            <div className="start__preloader">
              <Loader />
            </div>
          ) : isAuth ? (
            <Main />
          ) : (
            <Login />
          )
        }
      />
      <Route path="/registration" element={<SignUp />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

// appRef https://notepadonline.ru/app
