import React, { Component } from 'react';
import l2r from './l2r.png';

class HeaderView extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={l2r} className="App-logo" alt="l2r" />
        <h1 className="App-title">Welcome to Lineage 2 Revolution : Tools</h1>
      </header>
    );
  }
}

export default HeaderView;
