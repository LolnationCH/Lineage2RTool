import React, { Component } from 'react';
import './App.css';

import WebsitesView from './view/websitesView';
import HeaderView from './headerView';
import FooterView from './footerView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderView/>
        <WebsitesView/>
        <FooterView/>
      </div>
    );
  }
}

export default App;
