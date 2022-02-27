import React from 'react'
import './style/App.scss'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import Content from './components/Content/Content'

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Content />
    </div>
  )
}

export default App

// appRef https://notepadonline.ru/app
