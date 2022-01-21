import React, { useState } from 'react'
import './App.css';
import RouteList from './RouteList';
import Nav from './Nav';
import colorsArr from './colors';


function App2() {
  const [colors, setColors] = useState(colorsArr)

  return (
    <div className="App">
      <h1>app 2</h1>
      <Nav colors={colors} />
      <RouteList setColors={setColors} colors={colors} />
    </div>
  );
}

export default App2;