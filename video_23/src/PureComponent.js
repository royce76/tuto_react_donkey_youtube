import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('%c render() du composant pure', 'color:green;');
        return (
            <div>
                Je suis PureComponent
            </div>
        )
    }
}

export default PureComp
