import React, { Component } from "react";

class NombreMystere extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            nombreAleatoire: Math.floor(Math.random() * 10) + 1,
            saisie: "",
            message: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.verifierNombre = this.verifierNombre.bind(this);
        this.recommencer = this.recommencer.bind(this);
    }

    handleChange(e) {
        this.setState({ saisie: e.target.value });
    }

    verifierNombre() {
        const { saisie, nombreAleatoire } = this.state;
        if(parseInt(saisie) === nombreAleatoire) {
            this.setState({ message: "Bravo, vous aver devine le bon nombre!" });
        } else {
            this.setState({ message: "Mauvaise reponse, essayez encore! "});
        }
    }

    recommencer() {
        this.setState({
            nombreAleatoire: Math.floor(Math.random() * 10) + 1,
            saisie: "",
            message: ""
        });
    }

    render() {
        return(
            <div style={{ textAlign: "center", marginTop: "50px "}}>
                <h1>Jeu du nombre mystere</h1>
                <p>Entrez un nombre entre 1 et 10: </p>
                <input
                type="number"
                value={this.state.saisie}
                onChange={this.handleChange}
                />
                <br />
                <button onClick={this.verifierNombre}>Verifier</button>
                <button onClick={this.recommencer}>Rejouer</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}
export default NombreMystere;