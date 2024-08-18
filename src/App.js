import React, { useState } from 'react';
import './App.css';
import Square from './Components/Square';
import ColorChange from './Components/ColorChange';

function App() {
  const [colorName, setColorName] = useState('');

  return (
    <div className="App">
      {/* The square, pass in the color name */}
      <Square 
        colorName={colorName}
      />

      {/* The input form, pass in props */}
      <ColorChange 
        colorName={colorName}
        setColorName={setColorName}
      />
    </div>
  );
}

export default App;
