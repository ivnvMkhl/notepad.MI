import React from 'react'
import './App.css'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Content from './components/Content'

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
