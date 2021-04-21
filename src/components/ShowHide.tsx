import React, { useState } from 'react'

const ShowHide = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'hide' : 'show'}
      </button>
      <p>{visible ? 'Is Visible' : 'Not visible'}</p>
    </div>
  )
}

export default ShowHide
