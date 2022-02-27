import React from 'react'
import { useDispatch } from 'react-redux'
import { changeNoteSort } from '../../redux/actions'

const HeaderMenuBlock = (props) => {
  const dispatch = useDispatch()
  return (
    <input
      type="button"
      className="header_dd-item"
      value={props.name}
      onClick={() => {
        dispatch(changeNoteSort('update'))
      }}
    />
  )
}

export default HeaderMenuBlock
