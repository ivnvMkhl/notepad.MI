import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
  const alertType = useSelector((state) => state.app.alert.alertType)
  const alertText = useSelector((state) => state.app.alert.alertText)

  let alertIcon = <div>x</div>
  if (alertType === 'compl') {
    alertIcon = (
      <svg style={{ fill: 'var(--text-color)' }} version="1.1" viewBox="0 0 62.36 62.36">
        <path d="M22.7,51.17a3.15,3.15,0,0,1-2.22-.93L3.68,33.45A3.15,3.15,0,0,1,8.13,29L22.7,43.57,54.07,12.2a3.18,3.18,0,0,1,2.25-1,3.18,3.18,0,0,1,3.21,3.21,3.19,3.19,0,0,1-1,2.25L24.93,50.24a3.2,3.2,0,0,1-2.23.93Z" />
      </svg>
    )
  } else if (alertType === 'warn') {
    alertIcon = (
      <svg style={{ fill: 'var(--text-color)' }} version="1.1" viewBox="0 0 62.36 62.36">
        <path d="M52.19,51.82a2.83,2.83,0,0,1-4,4L27.51,35.15,6.84,55.82a2.82,2.82,0,0,1-4,0,2.8,2.8,0,0,1,0-4L23.51,31.15,2.84,10.48a2.83,2.83,0,0,1,4-4L27.51,27.14,48.18,6.47a2.84,2.84,0,0,1,4,4L31.52,31.15Z" />
      </svg>
    )
  } else if (alertType === 'err') {
    alertIcon = (
      <svg style={{ fill: 'var(--text-color)' }} version="1.1" viewBox="0 0 62.36 62.36">
        <path d="M52.19,51.82a2.83,2.83,0,0,1-4,4L27.51,35.15,6.84,55.82a2.82,2.82,0,0,1-4,0,2.8,2.8,0,0,1,0-4L23.51,31.15,2.84,10.48a2.83,2.83,0,0,1,4-4L27.51,27.14,48.18,6.47a2.84,2.84,0,0,1,4,4L31.52,31.15Z" />
      </svg>
    )
  }

  return (
    <div className={`alert__container alert__container_${alertType}`}>
      <div className="alert__icon">
        <div style={{ width: '19px', height: '19px', marginRight: '12px' }}>{alertIcon}</div>
      </div>
      <div className="alert__text">{alertText}</div>
    </div>
  )
}

export default Alert
