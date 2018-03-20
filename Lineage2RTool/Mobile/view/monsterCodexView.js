import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Hr from "react-native-hr-plus";
import ModalDropdown from 'react-native-modal-dropdown';

import styles from '../Styles'
import monster_codex from "../data/codex/monster_codex.json"

export default class MonsterCodexView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {field_selected: '',  search_field:null, codexInfoView:null};
  }

  makeCodexInfoView(dataShowed){
    console.log(dataShowed)
    return (
      <View key={dataShowed.name} style={styles.codexInfoView}>
        <Hr color='white' width={1}>
            <Text style = {styles.baseText}>Name : {dataShowed.name}</Text>
        </Hr>
        <Text style = {styles.baseText}>Mob drop : {dataShowed.mob_drop}</Text>
        <Text style = {styles.baseText}>Location : {dataShowed.location}</Text>
        <Text style = {styles.baseText}>Stat type : {dataShowed.stat_type}</Text>
        <Text style = {styles.baseText}>Stat increase per level : {dataShowed.stat_inc_p_lvl}</Text>
        <Text style = {styles.baseText}>Total Needed : {dataShowed.total_needed}</Text>
        <Text style = {styles.baseText}>Codex Grade : {dataShowed.grade}</Text>
      </View>
    );
  }

  makeCodexView(dataArr){
    return (
      <View>
          {dataArr.map(this.makeCodexInfoView)}
      </View>
    );
  }

  search_for_data (){
      var arrCodex = []
      for (i = 0; i < monster_codex.length; ++i) {
          if (monster_codex[i][this.state.field_selected] == this.state.search_field){
              arrCodex.push(monster_codex[i]);
          }
      }
      this.setState({
                      codexInfoView : this.makeCodexView(arrCodex)
                    });
  }

  render(){
    var fields = ['name', 'mob_drop', 'location', 'stat_type', 'grade']
    return (
      <View>
        <View style={styles.codexView}>

          <View style={{flex:4, flexDirection:'column'}}>
          <ModalDropdown
            options={fields}
            style={styles.picker}
            textStyle={styles.textStylePicker}
            onSelect={(idx, value) => this.setState({field_selected: value})}
            />
          </View>
          <View style={{flex:6, flexDirection:'column'}}>
          <View style={styles.textInputView}>
            <TextInput
              style={styles.textInput}
              placeholder="Search"
              onChangeText={(search_field) => this.setState({search_field})}
            />
          </View></View>

        <View style={{flex:2, flexDirection:'column'}}>
          <Button style={styles.searchButton} onPress={() => this.search_for_data()}
                title="Search"
            />
        </View></View>
        {this.state.codexInfoView}
      </View>
    );
  }
}
