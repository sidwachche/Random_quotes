import React, { useState } from 'react';
import './bootstrap.scss';
import './App.scss';
import RandomQuotes from './RandomQuotes/RandomQuotes';
function App() {
  const [color, setColor] = useState('#000');
  return (
    <div className="main-container" style={{ backgroundColor: color }}>
      <RandomQuotes color={color} setColor={setColor} />
    </div>
  );
}

export default App;
