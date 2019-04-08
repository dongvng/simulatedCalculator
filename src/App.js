import React, { Component } from 'react';
import './App.css';

import Result from '../src/components/result/result'
import Main from '../src/components/main/main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Result />
        <Main />
      </div>
    );
  }
}

export default App;
