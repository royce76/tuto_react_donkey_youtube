import React from 'react';

const Car = ({name, color, year}) => {

    const colorInfo = color ? (`${color}`) : 'Aucune';

    if (name) {

        return (
            <tr>
                <td>{ name }</td>
                <td>{ year }</td>
                <td>{ colorInfo }</td>
            </tr>
        );
        
    } 
    else {
        return null;
    }

    
}

export default Car;