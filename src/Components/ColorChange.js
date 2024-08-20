import React from 'react'

const ColorChange = ({ colorName, setColorName }) => {
  return (
    // Form for updating the color name, prevent reloading of the page
    <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
        <label htmlFor='colorName'>Change Color</label>

        {/* the input */}
        <input 
            autoFocus
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