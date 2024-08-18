import React from 'react'

const ColorChange = ({ colorName, setColorName }) => {
  return (
    <form className='colorForm'>
        <label htmlFor='colorName'>Change Color</label>
        <input 
            autofocus
            id='colorName'
            placeholder='Add Color Name'
            required
            value={colorName}
            onChange={(e) => setColorName(e.target.value)}
        />
    </form>
  )
}

export default ColorChange