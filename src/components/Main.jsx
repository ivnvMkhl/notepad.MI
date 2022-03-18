import React from 'react'
import Header from './Header/Header'
import Navigation from './Navigation/Navigation'
import Content from './Content/Content'
import { useDispatch, useSelector } from 'react-redux'
import { offMenuBlock } from '../redux/app_reducer/appActions'

const Main = () => {
  const dispatch = useDispatch()
  const headerMenuOpen = useSelector((state) => state.app.appParams.headerMenuOpen)

  return (
    <div
      className="body-wrapper"
      onClick={() => {
        if (headerMenuOpen) dispatch(offMenuBlock())
      }}
    >
      <div className="wrapper">
        <Header />
        <Navigation />
        <Content />
      </div>
    </div>
  )
}

export default Main
