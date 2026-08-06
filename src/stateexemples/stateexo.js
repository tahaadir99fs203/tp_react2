import React, { Component } from "react";

class Form extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            nom: '',
            prenom: '',
            age: ''
        };
    }

    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.setState({submitted: true});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Ajouter non:</label>
                    <input
                    type="text"
                    name="nom"
                    value={this.state.nom}
                    onChange={this.handleChange}
                    />
                    <label>Ajouter age:</label>
                    <input
                    type="number"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                    />
                    <button type="submit">Envoyer</button>
                </form>
                {this.state.submitted && (<h2>Bienvenue {this.state.nom} {this.state.prenom}</h2>)}
            </div>
        );
    }
}

export default Form;