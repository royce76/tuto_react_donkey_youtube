import React, { Component, Fragment } from 'react';
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
           <Fragment>
                <h1>{this.state.title}</h1>

                <button onClick={this.addTenYears}>+ 10 ans</button>

                <table>
                   <thead>
                    <tr>
                        <th>Marque</th>
                        <th>Age</th>
                        <th>Couleur</th>
                    </tr>
                   </thead>
                   <tbody>

                    {
                        this.state.voitures.map((voiture, index) => {
                            return (
                                <Fragment key={index}>
                                    <Car name={voiture.name} color={voiture.color} year={year - voiture.year + ' ans'} />
                                </Fragment>
                            );
                        })
                    }
                    </tbody>
                </table>

                
           </Fragment>
        );
    }
}

export default MyCars;