import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { headerMenuFunc, onMenuBlock } from '../../redux/actions'

const HeaderMenuBlock = ({ name, items, isOpen }) => {
  const dispatch = useDispatch()
  const headerMenuOpen = useSelector((state) => state.appParams.headerMenuOpen)

  if (isOpen) {
    return (
      <div className="header__dd-block">
        <button
          className="header__dd-button_select"
          onClick={() => {
            dispatch(onMenuBlock(name))
          }}
        >
          {name}
        </button>
        <div className="header__modal-container">
          {items.map((item) => (
            <buttons className="header__dd-items" key={item} onClick={() => dispatch(headerMenuFunc(item))}>
              {item}
            </buttons>
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
        onMouseEnter={() => {
          if (headerMenuOpen) dispatch(onMenuBlock(name))
        }}
      >
        {name}
      </button>
    )
}

export default HeaderMenuBlock
