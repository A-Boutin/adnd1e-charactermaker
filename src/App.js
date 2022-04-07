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
      <div class="sheet-title">
        <div class="dnd-gamename">Dungeons & Dragons</div>
        <div class="character-record-name">Character Record</div>
        <br/>
        <div class="title-bottomborder"></div>
      </div>
      <br/>
      <div>
        <div class="centralize first-row">
          <div class="character-info">
            <section>
              <div class="row">
                <input id="player-input" class="column character-input" type="text" name="player"></input>
                <label class="column character-label" for="player">Player</label>
              </div>
            </section>
            <section>
              <div class="row">
                <input id="character-name-input" class="column character-input" type="text" name="character_name"></input>
                <label class="column character-label" for="character_name">Character Name</label>
              </div>
              <div class="row">
                <input id="alignment-input" class="column character-input" type="text" name="alignment"></input>
                <label class="column character-label" for="alignment">Alignment</label>
              </div>
            </section>
            <section>
              <div class="row">
                <input id="classes-input" class="column character-input" type="text" name="classes"></input>
                <label class="column character-label" for="classes">Class(es)</label>
              </div>
              <div class="row">
                <input id="levels-input" class="column character-input" type="text" name="levels"></input>
                <label class="column character-label" for="levels">Level(s)</label>
              </div>
              <div class="row">
                <input id="full-hp-input" class="column character-input" type="number" name="full_hp"></input>
                <label class="column character-label" for="full_hp">Full hit points</label>
              </div>
            </section>
            <section>
              <div class="row">
                <input id="age-input" class="column character-input" type="text" name="age"></input>
                <label class="column character-label" for="age">Age</label>
              </div>
              <div class="row">
                <input id="gender-input" class="column character-input" type="text" name="gender"></input>
                <label class="column character-label" for="gender">Gender</label>
              </div>
              <div class="row">
                <input id="height-input" class="column character-input" type="text" name="height"></input>
                <label class="column character-label" for="height">Height</label>
              </div>
              <div class="row">
                <input id="weight-input" class="column character-input" type="text" name="weight"></input>
                <label class="column character-label" for="weight">Weight</label>
              </div>
              <div class="row">
                <input id="race-input" class="column character-input" type="text" name="race"></input>
                <label class="column character-label" for="race">Race</label>
              </div>
            </section>
            <section>
              <div class="row">
                <input id="languages-input" class="column character-input" type="text" name="languages"></input>
                <label class="column character-label" for="languages">Languages</label>
              </div>
            </section>
          </div>
        </div>
        <div class="first-row"><div id="" class="hp-ac"><div class="ac-label">Armor Class</div> <div class="shield">8</div><br/><div class="hp-label">Hit Points </div><div class="health">12</div></div></div>
        <div class="centralize first-row features">
          <div class="row features-border">
            <div class="column">
              <label class="features-label" for="racial_features">Racial Features:</label>
              <textarea class="features-input" type="text" name="racial_features"></textarea>
            </div>
            <div class="column">
              <label class="features-label" for="class_features">Class Features:</label>
              <textarea class="features-input" type="text" name="class_features"></textarea>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div>
        <Stats/>
      </div>
    </div>
  );
}

export default App;