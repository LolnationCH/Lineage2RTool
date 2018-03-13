import React from 'react';
import { StyleSheet, Text, ScrollView, View, TextInput, Button, StatusBar } from 'react-native';
import * as Progress from 'react-native-progress';

import styles from './Styles';
import MonsterCodexView from './view/monsterCodexView';
import WebsitesView from './view/websitesView';
import CharacterInfoView from './view/characterInfoView';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {charName: '', progress: 0.3};
  }

  render() {
    return (
      <ScrollView style={styles.mainScrollView}>
        <StatusBar hidden={true}/>
        <CharacterInfoView/>
        <MonsterCodexView/>
        <WebsitesView/>
      </ScrollView>
    );
  }
}
