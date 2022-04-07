import React from 'react';
import './App.css';
const dndInfo = require('./json/adnd1e.json');
  
  class Stats extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hit_probability : "",
            damage_adjustment : "",
            bend_bars_lift_gates : "",
            weight_allowance : "",
            open_doors_on_a : "",

            max_language : "",
            know_spell : "",
            min_spell : "",
            max_spell : "",

            magical_attack_adjustment : "",
            spell_bonus : "",
            spell_failure : "",

            react_adjustment : "",
            defense_adjustment : "",

            hit_point_adjustment : "",
            system_shock_survival : "",
            resurrection_survival : "",

            maximum_henchmen : "",
            loyalty_base : "",
            reaction_adjustment : ""
        };
        this.onStatChange = this.onStatChange.bind(this);
    }

    onStatChange = function(event, stat){
        var stats = (dndInfo.stats.find((st) => st[stat]));
        var mods = stats[stat].ability_score[event.target.value.toString()];
        if(typeof mods !== "undefined" || mods != null){
            for(var mod in mods) {
                this.setState({
                    [mod] : mods[mod]
                })
            }
        }
    }

    render() {
      return (
        <div class="centralize">
            <div class="stats">
                <div class="stat">
                    <div>
                        <label class="stat-label" for="strength">Str &nbsp;</label>
                        <input class="stat-input" type="number" name="strength" onChange={(e) => this.onStatChange(e, 'strength')}></input>
                    </div>
                    <div class="stat-mods">
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="hit_probability">hit prob.</label>
                            <input class="stat-mod-input" type="text" value={this.state.hit_probability} name="hit_probability" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="damage_adjustment">dam. adj.</label>
                            <input class="stat-mod-input" type="text" value={this.state.damage_adjustment} name="damage_adjustment" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="bend_bars">bend bars / lift gates</label>
                            <input class="stat-mod-input" type="text" value={this.state.bend_bars_lift_gates} name="bend_bars" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="weight_allowance">wgt. allow.</label>
                            <input class="stat-mod-input" type="text" value={this.state.weight_allowance} name="weight_allowance" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="open_doors">open doors</label>
                            <input class="stat-mod-input" type="text" value={this.state.open_doors_on_a} name="open_doors" disabled={true}></input>
                        </div>
                    </div>
                </div>
                <div class="stat">
                    <div>
                        <label class="stat-label" for="intelligence">Int &nbsp;</label>
                        <input class="stat-input" type="number" name="intelligence" onChange={(e) => this.onStatChange(e, 'intelligence')}></input>
                    </div>
                    <div class="stat-mods">
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="max_languages">max lang.</label>
                            <input class="stat-mod-input" type="text" value={this.state.max_language} name="max_languages" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="know_spell">know spell</label>
                            <input class="stat-mod-input" type="text" value={this.state.know_spell} name="know_spell" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="min_spells">min. spells</label>
                            <input class="stat-mod-input" type="text" value={this.state.min_spell} name="min_spells" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="max_spells">max. spells</label>
                            <input class="stat-mod-input" type="text" value={this.state.max_spell} name="max_spells" disabled={true}></input>
                        </div>
                    </div>
                </div>
                <div class="stat">
                    <div>
                        <label class="stat-label" for="wisdom">Wis </label>
                        <input class="stat-input" type="number" name="wisdom" onChange={(e) => this.onStatChange(e, 'wisdom')}></input>
                    </div>
                    <div class="stat-mods">
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="magical_attack_adjustment">mag. attack adjustment</label>
                            <input class="stat-mod-input" type="text" value={this.state.magical_attack_adjustment} name="magical_attack_adjustment" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="spell_bonus">spell bonus</label>
                            <input class="stat-mod-input" type="text" value={this.state.spell_bonus} name="spell_bonus" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="spell_failure">spell failure</label>
                            <input class="stat-mod-input" type="text" value={this.state.spell_failure} name="spell_failure" disabled={true}></input>
                        </div>
                    </div>
                </div>
                <div class="stat">
                    <div>
                        <label class="stat-label" for="dexterity">Dex </label>
                        <input class="stat-input" type="number" name="dexterity" onChange={(e) => this.onStatChange(e, 'dexterity')}></input>
                    </div>
                    <div class="stat-mods">
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="react_missile_adjustment">react / missile adjustment</label>
                            <input class="stat-mod-input" type="text" value={this.state.react_adjustment} name="react_missile_adjustment" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="defense_adjustment">defense adj.</label>
                            <input class="stat-mod-input" type="text" value={this.state.defense_adjustment} name="defense_adjustment" disabled={true}></input>
                        </div>
                    </div>
                </div>
                <div class="stat">
                    <div>
                        <label class="stat-label" for="constitution">Con </label>
                        <input class="stat-input" type="number" name="constitution" onChange={(e) => this.onStatChange(e, 'constitution')}></input>
                    </div>
                    <div class="stat-mods">
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="hit_point_adjustment">hit point adjustment</label>
                            <input class="stat-mod-input" type="text" value={this.state.hit_point_adjustment} name="hit_point_adjustment" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="system_shock">system shock</label>
                            <input class="stat-mod-input" type="text" value={this.state.system_shock_survival} name="system_shock" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="resurrect_survival">resurrect survival</label>
                            <input class="stat-mod-input" type="text" value={this.state.resurrection_survival} name="resurrect_survival" disabled={true}></input>
                        </div>
                    </div>
                </div>
                <div class="stat">
                    <div>
                        <label class="stat-label" for="charisma">Cha </label>
                        <input class="stat-input" type="number" name="charisma" onChange={(e) => this.onStatChange(e, 'charisma')}></input>
                    </div>
                    <div class="stat-mods">
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="max_henchmen">max. hench.</label>
                            <input class="stat-mod-input" type="text" value={this.state.maximum_henchmen} name="max_henchmen" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="loyalty_base">loyalty base</label>
                            <input class="stat-mod-input" type="text" value={this.state.loyalty_base} name="loyalty_base" disabled={true}></input>
                        </div>
                        <div class="stat-mod">
                            <label class="stat-mod-label" for="reaction_adjustment">reaction adjustment</label>
                            <input class="stat-mod-input" type="text" value={this.state.reaction_adjustment} name="reaction_adjustment" disabled={true}></input>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }

export { Stats }