import './App.css';
import MyComponent from './MyComponent';
import React, {Component} from 'react';

class App extends Component {

  state = {
    age:27
  }

  addOneYear = () => {
    this.setState((prevState) =>({
      age: prevState.age +1
    }))
  }

  forceChange = () => {
    this.forceUpdate(()=> {
      console.log('je force la mise a jour');
    })
  }

  render() {
    console.log('je suis dans le render')
    return (
      <div className="App">
        <MyComponent age={this.state.age}></MyComponent>
        <button onClick={this.addOneYear}>Changer le props</button>
        <button onClick={this.forceChange}>Forcer</button>
      </div>
    );
  }
}

export default App;
