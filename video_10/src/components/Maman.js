import React, {Component} from 'react';
import toto from './Toto';
import Toto from './Toto';

class Maman extends Component {

  // Pas besoin de constructor pour state depuis react 16.8
  state = {
    messageMaman: null,
    messageToto : null
  }

  ordreMaman = () => {
    this.setState({
      messageMaman : 'Va ranger ta chambre'
    });
  }

  reponseToto = () => {
    this.setState({
      messageToto: "okay maman"
    });
  }

  render() {
    return (
      <div>
        <h1>Maman</h1>
        <button onClick={this.ordreMaman} > Ordre de Maman</button>
        <p>{this.state.messageMaman}</p>
        <hr/>
        {/* le state récupère state.messageMaman comme props de toto */}
        <Toto name='Toto' leState={this.state} reponseToto={this.reponseToto}></Toto>

      </div>
    );
  }
}

export default Maman;
