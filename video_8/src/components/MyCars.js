import React, { Component } from 'react';
import Car from './Car';

class MyCars extends Component {

    noCopy = () => {
        alert('merci de ne pas copier le texte');
    }

    addStyle = (e) => {
        console.log(e.target);
        if (e.target.classList.contains('styled')) {
            e.target.classList.remove('styled');
        }
        else {
            e.target.classList.add('styled');
        }
    }

    render() {

        return (          
           <div>
                <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>

                <p onCopy={this.noCopy}>Lorem ipsum, dolor sit amet</p>

                <Car color='red'>Ford</Car>
                <Car>Mercedes</Car>
                <Car color="green"></Car>
           </div>
        );
    }
}

export default MyCars;