import React, { Component } from 'react';

class Result extends Component {
    
    state = {
        name: "Mario",
        winner: true
    }

    render() {

        // if (this.state.winner) {
        //     return (
        //         <div>
        //             <h1>Bravo { this.state.name }</h1>
        //         </div>
        //     );
        // } else {
        //     return (
        //         <div>
        //             <h1>Tu as perdu</h1>
        //         </div>
        //     );
        // }

        // if (this.state.winner) {
        //     return (
        //             <h1>Bravo { this.state.name }</h1>
        //     );
        // } else {
        //     return (
        //             <h1>Tu as perdu.</h1>
        //     );
        // }

        // let result ;

        // if (this.state.winner) {
        //     result = <h1>Bravo { this.state.name }</h1>;
        // } else {
        //     result = <h1>Tu as perdu.</h1>;
        // }

        // return result;

        // return (
        //     this.state.winner ? (
        //         <h1>Bravo { this.state.name }</h1>
        //     ) : (
        //         <h1>Perdu</h1>
        //     )
        // );

    return this.state.winner && <h1>Bravo {this.state.name}</h1>

        
    }
}

export default Result;