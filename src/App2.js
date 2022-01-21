import React, { useState } from 'react'
import './App.css';
import RouteList from './RouteList';
import Nav from './Nav';
import colorsArr from './colors';
import useLocalStorage from './hooks/useLocalStorage';

function App2() {

  const [colors, setColors, resetColors] = useLocalStorage('colors', colorsArr)

  return (
    <div className="App">
      <h1>app 2</h1>
      <Nav colors={colors} />
      <RouteList setColors={setColors} colors={colors} />
      <button onClick={resetColors}>Reset Colors</button>
    </div>
  );
}

export default App2;