import React from 'react'
import './style/App.scss'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import NotFound from './components/NotFound'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'
import { useSelector } from 'react-redux'

function App() {
  const isAuth = useSelector((state) => state.user.isAuth)

  return (
    <Routes>
      <Route path="/" element={isAuth ? <Main /> : <Login />} />
      <Route path="/registration" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App

// appRef https://notepadonline.ru/app
