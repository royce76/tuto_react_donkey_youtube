import React, { Component } from 'react'
// import ChildComponent from './ChildComponent'

export class LifeCycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Toto',
             step: 1 
        }

        console.log(`Etape ${this.state.step} : Je suis dans constructor`);
        
    }

    componentDidMount() {
        console.log(`Etape ${this.state.step} : Je suis dans le component did mount`);
        this.setState({
            name: this.props.nameApp,
            step: this.state.step +1
        })
        console.log(`Etape ${this.state.step} : setState a changé le state dans le cdm`);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(`Etape ${this.state.step} : Je suis dans le component did update`);

        console.log(prevState);
        console.log(prevProps);
        console.log(this.state);
    }

    componentWillUnmount() {
        console.log('je suis dans le démontage');
    }
    
    render() {

        console.log(`Etape ${this.state.step} : Je suis dans render`);

        return (
            <div className="borderBox">
                {console.log(`Etape ${this.state.step} : Mise à jour du DOM`)}
                <p>Chargement : {this.state.step}</p>
                <p>Nom: {this.state.name}</p>
                {/* <ChildComponent></ChildComponent> */}
            </div>
        )
    }
}

export default LifeCycle
