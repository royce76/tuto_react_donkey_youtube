import React, { Component } from 'react'

class MyComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Spiderman'
        }
    }
    

    static getDerivedStateFromProps(props, state) {
        console.log('%c getDerivedStateFromProps lancée', 'color:red; background: yellow; font-size:20px');

        console.log(props);
        console.log(state);
        return null;
    }

    shouldComponentUpdate(nextprops, nextState) {
        console.log('je suis dans shouldComponentUpdate');
        return true;
    }

    render() {
        return (
            <div>
                <p>Nom: {this.state.name}s</p>
                <p>AGE : {this.props.age}</p>
            </div>
        )
    }
}

export default MyComponent
