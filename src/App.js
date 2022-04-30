import React from 'react'
import './style/App.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import NotFound from './components/NotFound'
import SignUp from './components/Login/SignUp'
import { useDispatch, useSelector } from 'react-redux'
import Login from './components/Login/Login'
import { hideAuthLoader } from './redux/app_reducer/appActions'
import { reSingIn } from './redux/user_reducer/userActions'
import Loader from './components/Loader'
import Forgot from './components/Login/Forgot'
import { refreshTokenRequest } from './serverRequest'
import { fetchNotes } from './redux/note_reducer/noteActions'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)
  const authLoader = useSelector((state) => state.app.appParams.authLoader)
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  window.addEventListener('load', async () => {
    if (authLoader) {
      await refreshTokenRequest()
        .then(async (res) => {
          dispatch(hideAuthLoader())
          dispatch(reSingIn(res))
          dispatch(fetchNotes(res))
        })
        .catch((err) => {
          dispatch(hideAuthLoader())
        })
    }
  })

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
