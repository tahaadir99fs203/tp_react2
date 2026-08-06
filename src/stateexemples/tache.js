import React, { Component } from "react";

class TodoApp extends Component
{
    constructor() {
        super();
        this.state={
            taches: [],
            nouvelleTache: ''
        };
    }

    changerTache=(e)=>{
        this.setState({
            nouvelleTache: e.target.value
        });
    }

    ajouterTache=(e)=>{
        e.preventDefault();
        if(this.state.nouvelleTache!=='') {
            this.setState({
                taches: [...this.state.taches, this.state.nouvelleTache],
                nouvelleTache: ''
            });
        }
    }

    supprimerTache=(i)=>{
        const tachesModifiees=[...this.state.taches];
        tachesModifiees.splice(i, 1);
        this.setState({
            taches: tachesModifiees
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.ajouterTache}>
                    <input
                    type="text"
                    value={this.state.nouvelleTache}
                    onChange={this.changerTache}
                    />
                    <button type="submit">Ajouter</button>
                </form>
                <ul>
                    {this.state.taches.map((t, i)=>(
                        <li key={i}>
                            {t}
                            <button onClick={()=>this.supprimerTache(i)}>Supprimer</button>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}
export default TodoApp;