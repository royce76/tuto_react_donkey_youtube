import React from 'react';

//destructuring dans une fonction sur les paramètres

// const Users = ({name,age}) => { ou const Users = (props) => {

//     //const {name,age} = props;
//     console.log(name, age);

//     return (
//         <div>
//             <p>Chanteur :</p>
//         </div>
//     );
// }

// export default Users;

class Users extends React.Component {

    render () {

        const {name, age} = this.props;

        return (
            <div>
                <p>Chanteur : {name} a {age}</p>
            </div>
        );
    }
}

export default Users;