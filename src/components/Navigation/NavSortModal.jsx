import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { changeNoteSort, invertNoteSort, offSortModal, onSortModal } from '../../redux/actions'

const NavSortModal = () => {
  const dispatch = useDispatch()
  const sortModalFlag = useSelector((state) => state.appParams.sortModalFlag)
  const sortType = useSelector((state) => state.appParams.sortType)
  const invertSortFlag = useSelector((state) => state.appParams.invertSortFlag)

  if (sortModalFlag) {
    return (
      <div className="navigation__sort-modal">
        <button
          className="sort-modal__item"
          onClick={() => {
            if (sortType === 'Update') {
              dispatch(invertNoteSort())
              dispatch(offSortModal())
            } else {
              if (invertSortFlag) {
                dispatch(invertNoteSort())
              }
              dispatch(changeNoteSort('Update'))
              dispatch(offSortModal())
            }
          }}
        >
          Update
        </button>
        <button
          className="sort-modal__item"
          onClick={() => {
            if (sortType === 'Date') {
              dispatch(invertNoteSort())
              dispatch(offSortModal())
            } else {
              if (invertSortFlag) {
                dispatch(invertNoteSort())
              }
              dispatch(changeNoteSort('Date'))
              dispatch(offSortModal())
            }
          }}
        >
          Date
        </button>
        <button
          className="sort-modal__item"
          onClick={() => {
            if (sortType === 'Size') {
              dispatch(invertNoteSort())
              dispatch(offSortModal())
            } else {
              if (invertSortFlag) {
                dispatch(invertNoteSort())
              }
              dispatch(changeNoteSort('Size'))
              dispatch(offSortModal())
            }
          }}
        >
          Size
        </button>
        <button
          className="sort-modal__item sort-modal__item_end"
          onClick={() => {
            if (sortType === 'ABC') {
              dispatch(invertNoteSort())
              dispatch(offSortModal())
            } else {
              if (invertSortFlag) {
                dispatch(invertNoteSort())
              }
              dispatch(changeNoteSort('ABC'))
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
