import React, { Component } from 'react'

class SimpleComponent extends Component {
    render() {

        console.log('%c render() du composant simple', 'color:blue;')
        return (
            <div>
                bonjour
            </div>
        )
    }
}

export default SimpleComponent
