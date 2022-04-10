import React, { useState } from 'react'

function Button ({ statusSelect, removeFromList, addToList, id }) {
  const [isSelected, setSelected] = useState(statusSelect)

  const showMessage = () => {
    setSelected(!isSelected)
    if (isSelected) {
      removeFromList(id)
    } else {
      addToList(id)
    }
  }

  return (
        <>
            <div className='btn-container'>
                <button className="btn-add" onClick={showMessage}>{!isSelected ? 'Select' : 'Deselect'}</button>
            </div>
        </>
  )
}

export default Button
