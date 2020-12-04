import './App.css';
import MyCars from './components/MyCars';
import React, { Component } from 'react';

class App extends Component {

  render() {
    return (
      <div className="App">
        <MyCars></MyCars>
      </div>
    );
  }
  
}

export default App;
