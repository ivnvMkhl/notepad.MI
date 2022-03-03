import React from 'react'
import { useDispatch } from 'react-redux'
import { onMenuBlock } from '../../redux/actions'

const HeaderMenuBlock = ({ name, items, isOpen }) => {
  const dispatch = useDispatch()

  if (isOpen) {
    return (
      <div className="header__dd-block">
        <button
          className="header__dd-button"
          onClick={() => {
            dispatch(onMenuBlock(name))
          }}
        >
          {name}
        </button>
        <div className="header__modal-container">
          {items.map((item) => (
            <buttons className="header__dd-items">{item}</buttons>
          ))}
        </div>
      </div>
    )
  } else
    return (
      <button
        className="header__dd-button"
        onClick={() => {
          dispatch(onMenuBlock(name))
        }}
      >
        {name}
      </button>
    )
}

export default HeaderMenuBlock
