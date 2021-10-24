import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const dndInfo = require('./json/adnd1e.json');
console.log(dndInfo);

function rollStats(){
  var results = [];
  for(var i = 0; i < dndInfo.stats.length; i++){
      var rolls = rollDie("4d6");
      rolls.sort();
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
      bonus = (formatted_str.substring(formatted_str.indexOf("+")+1, formatted_str.length -1));
  }
  else{
      sides = parseInt(formatted_str.substring(formatted_str.indexOf("d")+1, formatted_str.length -1));
  }

  for(var i = 0; i < amount; i++){
      var roll = Math.floor(Math.random() * sides) + bonus;
      results.push(roll);
  }
  return results;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();