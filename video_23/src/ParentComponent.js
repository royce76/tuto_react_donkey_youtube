import React, { Component } from 'react'
import SimpleComponent from './SimpleComponent'
import PureComp from './PureComponent'


export class ParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Spiderman'
        }
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('je suis dans should component');

    //     // console.log(this.state.name);
    //     // console.log(nextState);

    //     if (this.state.name !== nextState.name) {
    //         return true;
    //     }
    //     return false;
    // }

    // Pour voir la différence avec purecomponent qui du coup si on recharge n'est plus appelé
    shouldComponentUpdate = () => {
        console.log('je suis dans should component');
        return true;
    }

    changeToBatman = () => {
        this.setState({
            name: 'batman'
        });
    }
    
    
    render() {

        console.log('%c RENDER( DU Composant PARENT', 'color: red;')
        return (
            <div>
                <SimpleComponent name={this.state.name}></SimpleComponent>
                <PureComp name={this.state.name}></PureComp>

                <button onClick={this.changeToBatman}>Changer en batman</button>  
            </div>
        )
    }
}

export default ParentComponent
