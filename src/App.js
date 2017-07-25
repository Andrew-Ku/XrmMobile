import React, { Component } from 'react';

import ModalDialog from './ModalDialog'

import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <ModalDialog />
        </p>
      </div>
    );
  }
}

export default App;
