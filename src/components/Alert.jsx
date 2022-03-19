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
        <path
          class="a"
          d="M56.44,55.35H6a3.16,3.16,0,0,1-1.59-.43,3.13,3.13,0,0,1-1.17-1.17,3.25,3.25,0,0,1,0-3.17l25.22-42a3.15,3.15,0,0,1,5.42,0l25.22,42a3.2,3.2,0,0,1,0,3.17,3.16,3.16,0,0,1-2.67,1.6Zm-44.86-6.3H50.87L31.22,16.31Z"
        />
        <path
          class="a"
          d="M34.33,33.34V44.77a2.34,2.34,0,0,1-1.57,2,4.09,4.09,0,0,1-3.15,0,2.33,2.33,0,0,1-1.58-2V33.34a2.33,2.33,0,0,1,1.58-2.05,4,4,0,0,1,3.15,0A2.34,2.34,0,0,1,34.33,33.34Zm-.21-8.72a2.81,2.81,0,0,0-.27-.55,4.63,4.63,0,0,0-.4-.48,3.25,3.25,0,0,0-4.45,0,4.63,4.63,0,0,0-.4.48,2.81,2.81,0,0,0-.27.55,2.39,2.39,0,0,0-.19.59,3.11,3.11,0,0,0,0,.61A3.23,3.23,0,0,0,28.37,27a3.2,3.2,0,0,0,2.86,2,3.24,3.24,0,0,0,1.19-.24A3.15,3.15,0,0,0,34.14,27a3,3,0,0,0,.23-1.19,2.08,2.08,0,0,0,0-.61,2.38,2.38,0,0,0-.25-.59Z"
        />
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
