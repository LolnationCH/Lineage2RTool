import React, { Component } from 'react';
import AppBar from 'material-ui-next/AppBar';
import Tabs, { Tab } from 'material-ui-next/Tabs';
import Typography from 'material-ui-next/Typography';

import CodexInfo from './searchView/CodexInfo';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}


class SearchInfo extends Component {
  constructor(props) {
      super(props);
      this.state = {
        value: 0,
      };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    var listTabs = [
      <CodexInfo/>,
      <TabContainer>Skills Info : Todo</TabContainer>,
      <TabContainer>Equipements Info : Todo</TabContainer>,
      <TabContainer>Ressources Info : Todo</TabContainer>,
      <TabContainer>Mounts Info : Todo</TabContainer>,
      <TabContainer>Cloaks Info : Todo</TabContainer>,
    ];
    return (
      <div>
        <AppBar position="static" style={{background:'black'}}>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="lime"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="Monster Codex" style={{color:'white'}}/>
            <Tab label="Skills" style={{color:'white'}}/>
            <Tab label="Equipements" style={{color:'white'}}/>
            <Tab label="Ressources" style={{color:'white'}}/>
            <Tab label="Mounts" style={{color:'white'}}/>
            <Tab label="Cloaks" style={{color:'white'}}/>
          </Tabs>
        </AppBar>
        {listTabs[this.state.value]}
      </div>
    );
  }
}

export default SearchInfo;
