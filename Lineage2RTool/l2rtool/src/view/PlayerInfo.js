import React, { Component } from 'react';
import TextField from 'material-ui-next/TextField';
import Select from 'material-ui-next/Select';
import { MenuItem } from 'material-ui-next/Menu';
import Grid from 'material-ui/Grid';


import charInfo from "../data/charInfo/charInfo.json";
import exp_chart from "../data/exp/exp_chart.json";
var races = Object.keys(charInfo);

String.prototype.toHHMMSS = function () {
    if (isNaN(this))
      return '00:00:00'
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

class PlayerInfo extends Component {
  constructor(props) {
      super(props);
      this.state = {race:"Human", className: "", name: "",
                    level: 1, expPerc: 0.0,
                    expSec: "0", timeTaken: "0"};
  }

  calculateExpLeft(){
    return Math.round(exp_chart[this.state.level - 1][this.state.level][0] * (1 - (this.state.expPerc/ 100)));
  }

  calculateExp(){
    return ("" + Math.round(this.calculateExpLeft() / (this.state.expSec/this.state.timeTaken))).toHHMMSS();
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />

          <Select
              value={this.state.race}
              onChange={this.handleChange('race')}
              style={{margin:"10px"}}
            >
            {races.map(n => {
              return (
                <MenuItem key={n} value={n}>{n}</MenuItem>
              );
            })}
          </Select>

          <Select
              value={this.state.className}
              onChange={this.handleChange('className')}
              style={{margin:"10px"}}
            >
            {charInfo[this.state.race].map(n => {
              return (
                <MenuItem key={n} value={n}>{n}</MenuItem>
              );
            })}
          </Select>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="level"
            label="Level"
            type="number"
            value={this.state.level}
            onChange={this.handleChange('level')}
            margin="normal"
          />
          <TextField
            id="expPerc"
            label="Exp %"
            type="number"
            style={{margin:"10px"}}
            value={this.state.expPerc}
            onChange={this.handleChange('expPerc')}
            margin="normal"
          />
          <TextField
              disabled
              id="expLeft"
              label="Exp to the next level"
              value={this.calculateExpLeft()}
              margin="normal"
              style={{marginRight:"10px"}}
            />
        </Grid>

        <Grid item xs={12}>
          <p>Exp Grind Calculator</p>
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="expSec"
            label="Exp made"
            type="number"
            value={this.state.expSec}
            onChange={this.handleChange('expSec')}
            margin="normal"
            style={{marginRight:"10px"}}
          />
          <TextField
            id="timeTaken"
            label="In seconds"
            type="number"
            value={this.state.timeTaken}
            onChange={this.handleChange('timeTaken')}
            margin="normal"
            style={{marginRight:"10px"}}
          />
          <TextField
            disabled
            id="res"
            label="Time to next level"
            value={this.calculateExp()}
            margin="normal"
            style={{marginRight:"10px"}}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PlayerInfo;
