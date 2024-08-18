import React from 'react'

const Square = ({ colorName }) => {
  const css = colorName;
  console.log(css);

  return (
    // The div for the square
    <div className='square' style={{backgroundColor: css}}>
      {/* Ternary operator to display the default text or the color name */}
      { colorName ? <p>{colorName}</p> : <p>Empty Value</p> }
    </div>
  )
}

export default Square