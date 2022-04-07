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
      <div>
        <section>
          <div class="testthree">
            <label class="testtwo" for="player">Player</label>
            <input type="text" name="player"></input>
          </div>
        </section>
        <section>
          <div class="testthree">
            <label class="testtwo" for="character_name">Character Name</label>
            <input class="testtwo" type="text" name="character_name"></input>
          </div>
          <div class="testthree">
            <label class="testtwo" for="alignment">Alignment</label>
            <input class="testtwo" type="text" name="alignment"></input>
          </div>
        </section>
        <section>
          <div class="testthree">
            <label class="testtwo" for="classes">Class(es)</label>
            <input class="testtwo" type="text" name="classes"></input>
          </div>
          <div class="testthree">
            <label class="testtwo" for="levels">Level(s)</label>
            <input class="testtwo" type="text" name="levels"></input>
          </div>
          <div class="testthree">
            <label class="testtwo" for="full_hp">Full hit points</label>
            <input class="testtwo" type="number" name="full_hp"></input>
          </div>
        </section>
        <section>
          <div class="testthree">
            <label class="testtwo" for="age">Age</label>
            <input class="testtwo" type="text" name="age"></input>
          </div>
          <div class="testthree">
            <label class="testtwo" for="gender">Gender</label>
            <input class="testtwo" type="text" name="gender"></input>
          </div>
          <div class="testthree">
            <label class="testtwo" for="height">Height</label>
            <input class="testtwo" type="text" name="height"></input>
          </div>
          <div class="testthree">
            <label class="testtwo" for="weight">Weight</label>
            <input class="testtwo" type="text" name="weight"></input>
          </div>
          <div class="testthree">
            <label class="testtwo" for="race">Race</label>
            <input class="testtwo" type="text" name="race"></input>
          </div>
        </section>
        <section>
          <div class="testthree">
            <label class="testtwo" for="languages">Languages</label>
            <input class="testtwo" type="text" name="languages"></input>
          </div>
        </section>
      </div>
      <br/>
      <div class="test">HP: <div class="health">12</div> AC: <div class="shield">8</div></div>
      <br/>
      <Stats/>
    </div>
  );
}

export default App;