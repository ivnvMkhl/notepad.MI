import React from 'react'
import { useSelector } from 'react-redux'

const SortBttnIcon = () => {
  const invertSortFlag = useSelector((state) => state.appParams.invertSortFlag)

  if (!invertSortFlag) {
    return (
      <div className="navigation__sort-icon">
        <svg version="1.1" viewBox="0 0 62.36 62.36">
          <path d="M56.38,9.13H6a3.15,3.15,0,0,1,0-6.3h50.4a3.15,3.15,0,1,1,0,6.3Zm-9.45,22A3.14,3.14,0,0,0,43.78,28H6a3.15,3.15,0,0,0,0,6.3h37.8a3.14,3.14,0,0,0,3.15-3.15Zm-12.6,25.2a3.14,3.14,0,0,0-3.15-3.15H6a3.15,3.15,0,0,0,0,6.3h25.2a3.15,3.15,0,0,0,2.23-.92,3.18,3.18,0,0,0,.92-2.23Z" />
        </svg>
      </div>
    )
  }
  return (
    <div className="navigation__sort-icon">
      <svg version="1.1" viewBox="0 0 62.36 62.36">
        <path d="M59.11,54.8a3.16,3.16,0,0,1-2.73,4.73H6a3.15,3.15,0,0,1,0-6.3h50.4A3.17,3.17,0,0,1,59.11,54.8ZM46.93,31.18A3.14,3.14,0,0,0,43.78,28H6a3.15,3.15,0,0,0,0,6.3h37.8a3.14,3.14,0,0,0,3.15-3.15ZM34.33,6a3.16,3.16,0,0,0-3.15-3.15H6a3.15,3.15,0,0,0,0,6.3h25.2A3.14,3.14,0,0,0,34.33,6Z" />
      </svg>
    </div>
  )
}

export default SortBttnIcon
