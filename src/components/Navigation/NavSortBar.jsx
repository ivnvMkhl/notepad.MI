import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { offSortModal, onSortModal, switchDisplNotes } from '../../redux/actions'
import DisplBttnIcon from './DisplBttnIcon'
import SortBttnIcon from './SortBttnIcon'

const NavSortBar = () => {
  const dispatch = useDispatch()
  const sortModalFlag = useSelector((state) => state.app.appParams.sortModalFlag)
  const sortType = useSelector((state) => state.app.appParams.sortType)

  let leftBttnStyle = ''
  if (sortModalFlag) leftBttnStyle = 'navigation__sort-button_onModal'

  return (
    <div className="navigation__sort-bar">
      <button
        className={`navigation__sort-button ${leftBttnStyle}`}
        onClick={() => {
          sortModalFlag ? dispatch(offSortModal()) : dispatch(onSortModal())
        }}
      >
        {sortType}
        <SortBttnIcon />
      </button>
      <button className={`navigation__view-button`} onClick={() => dispatch(switchDisplNotes())}>
        <DisplBttnIcon />
      </button>
    </div>
  )
}

export default NavSortBar
