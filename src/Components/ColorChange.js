import React from 'react'

const ColorChange = ({ colorName, setColorName }) => {
  return (
    // Form for updating the color name
    <form className='colorForm'>
        <label htmlFor='colorName'>Change Color</label>

        {/* the input */}
        <input 
            autofocus
            id='colorName'
            placeholder='Add Color Name'
            required

            // set the colorName state to the value
            value={colorName}

            // update the state anytime the value changes
            onChange={(e) => setColorName(e.target.value)}
        />
    </form>
  )
}

export default ColorChange