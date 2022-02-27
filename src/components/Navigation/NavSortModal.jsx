import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeNoteSort, invertNoteSort, offSortModal, onSortModal } from '../../redux/actions'

const NavSortModal = () => {
  const dispatch = useDispatch()
  const sortModalFlag = useSelector((state) => state.appParams.sortModalFlag)
  const sortType = useSelector((state) => state.appParams.sortType)

  if (sortModalFlag) {
    return (
      <div className="navigation__sort-modal" onMouseEnter={() => dispatch(onSortModal())} onMouseLeave={() => dispatch(offSortModal())}>
        <button
          className="sort-modal__item"
          onClick={() => {
            if (sortType === 'update') {
              dispatch(invertNoteSort())
              dispatch(offSortModal())
            } else {
              dispatch(changeNoteSort('update'))
              dispatch(offSortModal())
            }
          }}
        >
          Update
        </button>
        <button
          className="sort-modal__item"
          onClick={() => {
            if (sortType === 'date') {
              dispatch(invertNoteSort())
              dispatch(offSortModal())
            } else {
              dispatch(changeNoteSort('date'))
              dispatch(offSortModal())
            }
          }}
        >
          Date
        </button>
        <button
          className="sort-modal__item"
          onClick={() => {
            if (sortType === 'size') {
              dispatch(invertNoteSort())
              dispatch(offSortModal())
            } else {
              dispatch(changeNoteSort('size'))
              dispatch(offSortModal())
            }
          }}
        >
          Size
        </button>
        <button
          className="sort-modal__item sort-modal__item_end"
          onClick={() => {
            if (sortType === 'abc') {
              dispatch(invertNoteSort())
              dispatch(offSortModal())
            } else {
              dispatch(changeNoteSort('abc'))
              dispatch(offSortModal())
            }
          }}
        >
          ABC
        </button>
      </div>
    )
  } else return <div />
}

export default NavSortModal
