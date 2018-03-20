import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import * as Progress from 'react-native-progress';

import styles from '../Styles'
import exp_chart from "../data/exp/exp_chart.json";


String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

export default class CharacterInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {Level: '1',
                  exp: 0.0,
                  expToReachNextLvl: 0,
                  expTotal: 0,
                  expM: 0,
                  time: 0};
  }

  calculateExp(Level, exp){
    if (Level === '')
      return 0;
    var toReach = exp_chart[Level - 1][Level][0];
    return Math.round((exp_chart[Level - 1][Level][1] - toReach) + (toReach * exp));
  }

  setLevel(Level){
    if (Level === ''){
      this.setState({
        Level : '1'
      });
    }
    else {
      this.setState({
        Level : Level,
        expToReachNextLvl : this.calculateExp(Level, this.state.exp),
        expTotal : exp_chart[Level - 1][Level][1]
      });
    }
  }

  setExpPerc(exp){
    if (exp === '')
      exp = '0'
    this.setState({
      exp : exp/100,
      expToReachNextLvl : this.calculateExp(this.state.Level, exp / 100),
      expTotal : exp_chart[this.state.Level - 1][this.state.Level][1]
    });
  }

  calculateTimeRemainingTillNextLevel(exp, expMS) {
    if (isNaN(exp) || exp == 0)
      exp = 1;
    if (isNaN(expMS) || expMS == 0)
      expMS = 1;
    return (''+ Math.round(exp/expMS)).toHHMMSS();
  }

  render() {
    return(
      <View style={styles.mainView}>
        <Text style={styles.title}>Lineage 2 : Revolution tools</Text>

        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Level"
            keyboardType='numeric'
            onChangeText={(Level) => this.setLevel(Level)}/>
        </View>

        <View style={styles.textInputView}>
          <TextInput
            style={styles.textInput}
            placeholder="Exp %"
            keyboardType='numeric'
            onChangeText={(exp) => this.setExpPerc(exp)}/>
        </View>

        <View style={{flexDirection:'row'}}>
          <View style={{flex:1, flexDirection:'column'}}>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInput}
                placeholder="Exp made in"
                keyboardType='numeric'
                onChangeText={(expM) => this.setState({expM: expM})}/>
            </View>
          </View>

          <View style={{flex:1, flexDirection:'column'}}>
            <View style={styles.textInputView}>
              <TextInput
                style={styles.textInput}
                placeholder="seconds"
                keyboardType='numeric'
                onChangeText={(time) => this.setState({time: time})}/>
            </View>
          </View>
        </View>

        <View style={styles.codexView}>
          <Progress.Circle size={30}
                         showsText={true}
                         size={150}
                         progress={this.state.exp}
                         borderWidth={0}
                         color={'rgb(0, 255, 25)'}
                         unfilledColor={'rgb(121, 119, 119)'}/>
        </View>

        <View style={styles.expTextView}>
            <Text style={styles.expText}>Level : {this.state.Level}</Text>
            <Text style={styles.expText}>{{this.state.expTotal} - {this.state.expToReachNextLvl}} exp left</Text>
            <Text style={styles.expText}>{this.calculateTimeRemainingTillNextLevel((this.state.expTotal - this.state.expToReachNextLvl),(this.state.expM / this.state.time))} until next level</Text>
        </View>
      </View>
    );
  }
}
