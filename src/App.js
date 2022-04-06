import { RollStatsBtn } from "./DiceRolling";
import { Stats } from "./Stats";
import React from 'react';
import './App.css';
import './index.js';

function App() {
  return (
    <div className="App">
      <h1 className="Title">AD&D 1e Character Maker</h1>
      <p className="BySubheader">Coded By: <a href="https://twitter.com/Baguette_Senpai">Antoine Boutin</a></p>

      <RollStatsBtn/>
      <br/>
      <Stats/>
    </div>
  );
}

export default App;