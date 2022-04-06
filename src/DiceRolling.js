import React from 'react';
import './App.css';
const dndInfo = require('./json/adnd1e.json');

function printStats(){
    var rolls = rollStats();
    let msg = "";
    rolls.forEach((item, idx) => {
        msg += item + " ";
    });
    return msg;
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

  
  class RollStatsBtn extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : ""
        };
        this.printRolls = this.printRolls.bind(this);
    }

    printRolls = function(){
        this.setState({
            text : printStats()
        })
    }

    render() {
      return (
        <div>
        <p>{this.state.text}</p>
        <button onClick={this.printRolls}>
          Roll Stats
        </button>
        </div>
      );
    }
  }

export { RollStatsBtn }