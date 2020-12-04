import './App.css';
import MyCars from './components/MyCars';
import React, { Component } from 'react';

class App extends Component {

  state = {
    title : "Mon catalogue"
  };

  changeTitle = (e) => {
    this.setState({
      title: 'Mon nouveau titre'
    });
  }

  changeViaBind = (param) => {
    this.setState({
      title: param
    });
  }

  changeViaInput = (e) => {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <MyCars title={this.state.title}></MyCars>

        <button onClick={this.changeTitle}>Changer le nom en dure</button>
        <button onClick={() => this.changeViaParam('titre via Paramètre')}>Changer via Param</button>
        <button onClick={this.changeViaBind.bind(this,'titre via bind')}>Changer via BInd</button>
        <input type="text" onChange={this.changeViaInput} value={this.state.title}/>
      </div>
    );
  }

  changeViaParam = (title) => {
    this.setState({
      title: title
    });
  }
  
}

export default App;
