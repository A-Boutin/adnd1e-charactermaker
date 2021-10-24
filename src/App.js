import './App.css';
import './index.js';
const dndInfo = require('./json/adnd1e.json');

function printStats(){
  console.log(rollStats());
}

function rollStats(){
  var results = [];
  for(var i = 0; i < dndInfo.stats.length; i++){
      var rolls = rollDie("4d6");
      rolls.sort();
      // console.log(rolls);
      results.push(rolls[1]+rolls[2]+rolls[3]);
  }
  return results;
}

function rollDie(formatted_str){
  var results = [];
  
  var amount = parseInt(formatted_str.substr(0, formatted_str.indexOf("d")));
  var sides;
  var bonus = 0;
  if(formatted_str.indexOf("+") !== -1){
      sides = parseInt(formatted_str.substring(formatted_str.indexOf("d")+1, formatted_str.indexOf("+")));
      bonus = parseInt(formatted_str.substring(formatted_str.indexOf("+")+1, formatted_str.length -1));
  }
  else{
      sides = parseInt(formatted_str.substring(formatted_str.indexOf("d")+1, formatted_str.length));
  }

  for(var i = 0; i < amount; i++){
      var roll = Math.floor(Math.random() * sides)+1 + bonus;
      results.push(roll);
  }
  return results;
}

function App() {
  return (
    <div className="App">
      <h1 className="Title">AD&D 1e Character Maker</h1>
      <p className="BySubheader">Coded By:</p>
      <p className="BySubheader"><a href="https://twitter.com/Baguette_Senpai">Antoine Boutin</a></p>

      <button onClick={printStats}>Roll Stats</button>
    </div>
  );
}

export default App;