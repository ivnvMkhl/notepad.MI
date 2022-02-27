import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { invertNoteSort, offSortModal, onSortModal, switchDisplNotes } from '../../redux/actions'
import DisplBttnIcon from './DisplBttnIcon'
import SortBttnIcon from './SortBttnIcon'

const NavSortBar = () => {
  const dispatch = useDispatch()
  const sortModalFlag = useSelector((state) => state.appParams.sortModalFlag)

  let leftBttnStyle = '',
    rightBttnStyle = ''
  if (sortModalFlag) {
    leftBttnStyle = 'navigation__sort-button_left_onModal'
    rightBttnStyle = 'navigation__sort-button_right_onModal'
  }

  return (
    <div className="navigation__sort-bar">
      <button
        className={`navigation__sort-button navigation__sort-button_left ${leftBttnStyle}`}
        onMouseEnter={() => dispatch(onSortModal())}
        onMouseLeave={() => dispatch(offSortModal())}
        onClick={() => dispatch(invertNoteSort())}
      >
        <SortBttnIcon />
      </button>
      <button className={`navigation__sort-button navigation__sort-button_right ${rightBttnStyle}`} onClick={() => dispatch(switchDisplNotes())}>
        <DisplBttnIcon />
      </button>
    </div>
  )
}

export default NavSortBar
