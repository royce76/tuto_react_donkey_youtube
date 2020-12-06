import './App.css';
import React, { Component } from 'react';
import LifeCycle from './LifeCycle';

class App extends Component {

  state = {
    display: true
  }

  effacerOuAfficher = () => {
    this.setState({
      display : !this.state.display
    })
  }

  render() {

    const showComponent = this.state.display ? (<LifeCycle nameApp = "TotoApp"></LifeCycle>) : (<div></div>);

    return (
      <div className="App">
        {showComponent}
        <button onClick={this.effacerOuAfficher}>Démonter</button>
      </div>
    );
  }
}

export default App;
