import React, { Component } from 'react';
// import './myCss.css';
// import MyHead from './MyHeaderOne';
// import styles from './myCss.module.css'; 

// css inline dans une variable
// const redTitle = {
//     fontSize: '50px', 
//     color:'red'
// };

class Form extends Component {

    render() {

        // const myClass = this.props.head ? ('blue') : ("red") ;
        return(
            //style inline
            // <div>
            //     <h1 style={{fontSize: '50px', color:'red'}}>Commentaire</h1>
            //     <button>Valider</button>
            // </div>

            // css inline dans une variable
            // <div>
            //     <h1 style={redTitle}>Commentaire</h1>
            //     <button>Valider</button>
            // </div>

            // css import via myCss.css qui se trouve au même niveau
            // <div>
            //     <h1 className="blue">Commentaire</h1>
            //     {/* <p className={myClass + ' bigFont'}>Je suis rouge ou bleu</p> */}
            //     <p className={`${myClass} bigFont`}>Je suis rouge ou bleu</p>
            //     <button>Valider</button>
            // </div>

            //CSS module via styles ( module s'applique en local dans le composant où on est)
            // <div>
            //     <h2 className={styles.green}>Commentaire 1</h2>
            //     <MyHead></MyHead>                
            //     <p className="red">Je suis rouge ou bleu</p>
            //     <button>Valider</button>
            // </div>

            <div>
                <h1>Commentaire 1</h1>
                <button className="btn btn-danger">Valider</button>
            </div>

        );
    }
}

export default Form;