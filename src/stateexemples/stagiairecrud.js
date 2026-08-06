import React, { Component } from "react";

class StagiaireCrud extends Component
{
    constructor() {
        super();
        this.state={
            stagiaire:{
                nom: '',
                prenom: '',
                age: ''
            },
            listeStagiaires: [],
            modifierIsOn: false,
            indexStagiaireAmodifier: -1
        };
    }

    getValue =(e)=>{
        this.setState({
            stagiaire:{
                ...this.state.stagiaire,
                [e.target.name]: e.target.value
            }
        });
    }

    ajouterStagiaire=()=>{
        this.setState({
            listeStagiaires: [...this.state.listeStagiaires, this.state.stagiaire],
            stagiaire:{
                nom: '',
                prenom: '',
                age: ''
            }
        });
    }

    supprimerStagiaire=(i)=>{
        this.setState({
            listeStagiaires: this.state.listeStagiaires.filter((_, i)=>i!==i)
        })
    }

    modifierStagiaire=(sta, i)=>{
        this.setState({
            stagiaire: sta,
            modifierIsOn: true,
            indexStagiaireAmodifier: i
        });
    }

    validerModifier=()=>{
        const liste = [...this.state.listeStagiaires];
        liste[this.state.indexStagiaireAmodifier]=this.state.stagiaire;
        this.setState({
            listeStagiaires: liste,
            modifierIsOn: false,
            indexStagiaireAmodifier: -1,
            stagiaire:{
                nom: '',
                prenom: '',
                age: ''
            }
        });
    }

    render() {
        return(
            <div>
                <div>
                    <label>Nom: </label>
                    <input
                    type="text"
                    name="nom"
                    value={this.state.stagiaire.nom}
                    onChange={this.getValue}
                    />
                    <label>Prenom: </label>
                    <input
                    type="text"
                    name="prenom"
                    value={this.state.stagiaire.prenom}
                    onChange={this.getValue}
                    />
                    <label>Age: </label>
                    <input
                    type="number"
                    name="age"
                    value={this.state.stagiaire.age}
                    onChange={this.getValue}
                    />
                    {
                        this.state.modifierIsOn ? (
                            <button onClick={this.validerModifier}>Modifier</button>
                        ) : (
                            <button onClick={this.ajouterStagiaire}>Ajouter</button>
                        )
                    }
                </div>
                <hr />
                <table border="1" cellPadding="5">
                    <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prenom</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.listeStagiaires.length===0 ? (
                                <tr>
                                   <td>Aucun stagiaire ajoute</td>
                                </tr>
                            ) : (
                                this.state.listeStagiaires.map((sta, i)=>(
                                    <tr key={i}>
                                        <td>{sta.nom}</td>
                                        <td>{sta.prenom}</td>
                                        <td>{sta.age}</td>
                                        <td>
                                            <button onClick={()=>this.supprimerStagiaire(i)}>Supprimer</button>
                                            &nbsp;
                                            <button onClick={()=>this.modifierStagiaire(sta, i)}>Modifier</button>
                                        </td>
                                    </tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default StagiaireCrud;