import React from 'react'

const Square = ({ colorName }) => {
  return (
    // The div for the square
    <div className='square' style={{backgroundColor: {colorName}}}>
      {/* Ternary operator to display the default text or the color name */}
      { colorName ? <p>{colorName}</p> : <p>Empty Value</p> }
    </div>
  )
}

export default Square