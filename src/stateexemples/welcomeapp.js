import React, { Component } from "react";

class WelcomeApp extends Component
{
    constructor() {
        super();
        this.state={
            nom: '',
            message: ''
        };
    }

    changerNom=(e)=>{
        this.setState({
            nom: e.target.value
        });
    }

    envoyerFormulaire=(e)=>{
        e.preventDefault();
        this.setState({
            message: "Bienvenue "+this.state.nom+" !"
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.envoyerFormulaire}>
                    <label>Donner votre nom</label>
                    <input
                    type="text"
                    value={this.state.nom}
                    onChange={this.changerNom}
                    />
                    <button type="submit">Envoyer</button>
                </form>
                <p>{this.state.message}</p>
            </div>
        );
    }
}
export default WelcomeApp;