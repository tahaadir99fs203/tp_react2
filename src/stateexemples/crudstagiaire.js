import React, { Component } from "react";

class TPStagiaireCrud extends Component
{
    constructor() {
        super();
        this.state = {
            stagiaire: {
                nom: '',
                prenom: '',
                age: ''
            },
            listeStagiaires: [],
            modifierIsOn: false,
            indexStagiaireAmodifier: -1
        };
    }

    getValue = (event) => {
        this.setState({
            stagiaire: {
                ...this.state.stagiaire,
                [event.target.name]: event.target.value
            }
        });
    }

    ajouterStagiaire = () => {
        this.setState({
            listeStagiaires: [...this.state.listeStagiaires, this.state.stagiaire],
            stagiaire: {
                nom: '',
                prenom: '',
                age: ''
            }
        });
    }

    supprimerStagiaire = (index) => {
        this.setState({
            listeStagiaires: this.state.listeStagiaires.filter((_, index) => index!==)
        })
    }
}