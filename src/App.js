import React from 'react';
import logo from './logo.svg';
import Pokegame from './Pokegame';
import './App.css';
import pokelogo from './poke.png';

function App() {
  return (
    <div className="App">
      <div className="App-img">
        <img className="App-logo" src={pokelogo} alt="Pokemon Logo"/>
      </div>
      <Pokegame />
    </div>
  );
}

export default App;
