import React, { Component } from "react";

class FootballGame extends Component
{
    constructor() {
        super();
        this.state = {
            listeEquipes: [],

            equipe: {
                id: "",
                nom: "",
                ville: ""
            },

            joueur: {
                id: "",
                nom: "",
                num: "",
                idEquipe: ""
            },

            message: "",
            indexEquipeAmodifier: -1
        }
    }

    getValueEquipe = (e) => {
        let nom = e.target.name;
        let valeur = e.target.value;
        this.setState({
            equipe: {
                ...this.state.equipe, [nom]: valeur
            }
        });
    }

    getJoueurValue = (e) => {
        let nom = e.target.name;
        let valeur = e.target.value;
        this.setState({
            joueur: {
                ...this.state.joueur, [nom]:  valeur
            }
        });
    }

    ajouterEquipe = () => {
        if(this.state.equipe.id !== "" && this.state.equipe.nom !== "" && this.state.equipe.ville !== "") {
            let eq = {
                id: this.state.equipe.id,
                nom: this.state.equipe.nom,
                ville: this.state.equipe.ville,
                listeJoueur: []
            };
            let tab = this.state.listeEquipes;
            tab.push(eq);
            this.setState({
                listeEquipes: tab,
                equipe: {
                    id: "",
                    nom: "",
                    ville: ""
                },
                message: ""
            });
        } else {
            this.setState({message: "Tous les champs sont obligatoires"});
        }
    }

    ajouterJoueur = () => {
        if(this.state.joueur.id !== "" && this.state.joueur.nom !== "" && this.state.joueur.num !== "" && this.state.joueur.idEquipe !== "") {
            let indexEquipe = this.state.joueur.idEquipe;
            let equipes = this.state.listeEquipes;
            let eq = equipes[indexEquipe];
            eq.listeJoueur.push({
                id: this.state.joueur.id,
                nom: this.state.joueur.nom,
                num: this.state.joueur.num
            });
            equipes[indexEquipe] = eq;
            this.setState({
                listeEquipes: equipes,
                joueur: {
                    id: "",
                    nom: "",
                    num: "",
                    idEquipe: ""
                },
                message: ""
            });
        } else {
            this.setState({ message: "Remplir tous les champs" });
        }
    }

    supprimerEquipe = (i) => {
        let tab = this.state.listeEquipes.filter((equipe, ind) => ind !== i);
        this.setState({ listeEquipes: tab });
    }

    modifierEquipe = (i, eq) => {
        this.setState({
            equipe: {
                id: eq.id,
                nom: eq.nom,
                ville: eq.ville
            },
            indexEquipeAmodifier: i
        });
    }

    validerModifier = () => {
        let i = this.state.indexEquipeAmodifier;
        let tab = this.state.listeEquipes;
        let old = tab[i];
        let eq = {
            id: this.state.equipe.id,
            nom: this.state.equipe.nom,
            ville: this.state.equipe.ville,
            listeJoueur: old.listeJoueur
        };
        tab[i] = eq;
        this.setState({
            listeEquipes: tab,
            equipe: {
                id: "",
                nom: "",
                ville: ""
            },
            indexEquipeAmodifier: -1
        });
    }

    render() {
        return(
            <div>
                <h2>Ajouter une equipe</h2>
                id: <input type="number" name="id" value={this.state.equipe.id} onChange={this.getValueEquipe}/><br/>
                nom: <input type="text" name="nom" value={this.state.equipe.nom} onChange={this.getValueEquipe}/><br/>
                ville: <input type="text" name="ville" value={this.state.equipe.ville} onChange={this.getValueEquipe}/><br/>

                {this.state.indexEquipeAmodifier !== -1 ? (
                    <button onClick={this.validerModifier}>Modifier</button>
                ) : (
                    <button onClick={this.ajouterEquipe}>Ajouter</button>
                )}
                <p>{this.state.message}</p>

                <h2>Ajouter un joueur</h2>
                Equipe: 
                <select name="idEquipe" value={this.state.joueur.idEquipe} onChange={this.getJoueurValue}>
                    <option value="">--Choisir--</option>
                    {this.state.listeEquipes.map((eq, i)=>
                        <option key={i} value={i}>{eq.nom}</option>
                    )}
                </select><br/>
                id: <input type="number" name="id" value={this.state.joueur.id} onChange={this.getJoueurValue}/><br/>
                nom: <input type="text" name="nom" value={this.state.joueur.nom} onChange={this.getJoueurValue}/><br/>
                numero: <input type="number" name="num" value={this.state.joueur.num} onChange={this.getJoueurValue}/><br/>
                <button onClick={this.ajouterJoueur}>Ajouter joueur</button>

                {this.state.listeEquipes.length > 0 ? (
                    <div>
                        <h2>Liste des equipes</h2>
                        <table border="1" cellPadding="5">
                            <thead>
                                <tr>
                                    <th>actions</th>
                                    <th>id</th>
                                    <th>nom</th>
                                    <th>ville</th>
                                    <th>joueurs</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listeEquipes.map((eq, i) => (
                                    <tr key={i}>
                                        <td>
                                            <button onClick={() => this.supprimerEquipe(i)}>Supprimer</button>
                                            <button onClick={() => this.modifierEquipe(i, eq)}>Modifier</button>
                                        </td>
                                        <td>{eq.id}</td>
                                        <td>{eq.nom}</td>
                                        <td>{eq.ville}</td>
                                        <td>
                                            <table border="1">
                                                <thead>
                                                    <tr>
                                                        <th>id</th>
                                                        <th>nom</th>
                                                        <th>num</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {eq.listeJoueur.map((j, jindex) => (
                                                        <tr key={jindex}>
                                                            <td>{j.id}</td>
                                                            <td>{j.nom}</td>
                                                            <td>{j.num}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h3>Aucune equipe pour le moment</h3>
                )}
            </div>
        )
    }
}
export default FootballGame;