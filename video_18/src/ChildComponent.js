import React, { Component } from 'react'

export class ChildComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }

        console.log('Je suis dans le contructor enfant');
    }

    componentDidMount() {
        console.log('Je suis dans le component did mount enfant');
    }
    
    
    render() {
        console.log('Je suis dans render enfant');
        return (
            <div>
                {console.log('Mise à jour DOM dans composant enfant')}
                Hello wolrd
            </div>
        )
    }
}

export default ChildComponent
