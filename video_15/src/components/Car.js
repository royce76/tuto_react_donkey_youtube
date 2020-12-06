import React from 'react';
import car from './../car.png';

const Car = (props) => {
    console.log(props.color);
    return (
        <img className="carBorder" style={{backgroundColor: props.color}} src={car} alt="car"/>
    );
}

export default Car;