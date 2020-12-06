import React, { Component } from 'react';
import Car from './Car';

class Form extends Component {

    state= {
        username: '',
        color: '',
        colors: ['--Choisir--', 'red', "blue", "green"]
    }

    handlePseudo= (e) => {
        this.setState({
            username: e.target.value
        });
    }

    handleColor= (e) => {
        this.setState({
            color: e.target.value
        });
    }

    handleComments= (e) => {
        this.setState({
            comments: e.target.value
        });
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(`Username: ${this.state.username} Couleur: ${this.state.color} Commentaire: ${this.state.comments}`);
    }

    render() {
        return (
            <div>
                <Car color={this.state.color} ></Car>
                <h1>Commentaire</h1>
                <form onSubmit={this.handleSubmitForm}>
                    <div>
                        <label>Pseudo</label>
                        <input type="text" value={this.state.username} onChange={this.handlePseudo}/>
                    </div>
                    <div>
                        <label>Couleur</label>
                        <select value={this.state.color} onChange={this.handleColor}>
                            {
                                this.state.colors.map((color,index) => {
                                    return (<option key={index} value={color}>{color}</option>);
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Commentaire</label>
                        <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
                    </div>

                    <button>Valider</button>
                </form>
            </div>
        );
    }
}

export default Form;