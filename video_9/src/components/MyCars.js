import React, { Component } from 'react';
import Car from './Car';

class MyCars extends Component {

    state = {
        voitures: 
        [
            {
                name:'Ford',
                color:'red',
                year:2000
            },
            {
                name:'Mercedes',
                color:'black',
                year:2010
            },
            {
                name:'Peugeot',
                color:'green',
                year:2018
            }
        ],
        title : 'Mon titre en state dans MyCars'
    };

    addTenYears = () => {

        const updateState = this.state.voitures.map((x) => {
            return x.year -= 10;
        });

        this.setState({
            updateState
        });
    }

    render() {

        const year = new Date().getFullYear();

        return (          
           <div>
                <h1>{this.state.title}</h1>

                <button onClick={this.addTenYears}>+ 10 ans</button>

                {
                    this.state.voitures.map((voiture, index) => {
                        return (
                            <div key={index}>
                                <Car name={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                            </div>
                        );
                    })
                }
           </div>
        );
    }
}

export default MyCars;