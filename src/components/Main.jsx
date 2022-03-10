import React from 'react'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Content from './Content/Content'

const Main = () => {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <Content />
    </div>
  )
}

export default Main
