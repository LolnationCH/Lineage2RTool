import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';
import styles from '../Styles'
import monster_codex from "../data/codex/monster_codex.json"

var links = { "Reddit" : "https://www.reddit.com/r/Lineage2Revolution/",
              "L2R fansite" : "http://www.lineage2revolution.eu/",
              "Forum" : "https://community.netmarble.com/lin2ws/lin2ws",
              "Playl2r" : "https://www.playl2r.com/"}

export default class WebsitesView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={styles.fourButtonView}>
        <View style={styles.twoButtonView}>
          <View style={styles.buttonView}>
            <Button style={styles.buttonShortcut} onPress={() => {Linking.openURL(links["Playl2r"]).catch(err => console.error('An error occurred', err));}}
                title="Playl2r"/>
          </View>
          <View style={styles.buttonView}>
            <Button style={styles.buttonShortcut} onPress={() => {Linking.openURL(links["L2R fansite"]).catch(err => console.error('An error occurred', err));}}
                title="L2R fansite"/>
          </View>
        </View>
        <View style={styles.twoButtonView}>
          <View style={styles.buttonView}>
            <Button style={styles.buttonShortcut} onPress={() => {Linking.openURL(links["Forum"]).catch(err => console.error('An error occurred', err));}}
                title="Forum"/>
          </View>
          <View style={styles.buttonView}>
            <Button style={styles.buttonShortcut} onPress={() => {Linking.openURL(links["Reddit"]).catch(err => console.error('An error occurred', err));}}
                title="Reddit"/>
          </View>
        </View>
      </View>
    );
  }
}
