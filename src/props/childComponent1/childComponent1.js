import React, { Component } from "react";

class ChildComponent1 extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            mesGroupes: this.state.listeGroupe,
            monClient: this.props.UnClient
        }
    }

    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td>donnees1 From parent:</td>
                        <td>{this.props.donnee1}</td>
                    </tr>
                    <tr>
                        <td>mesGroupe From parent:</td>
                        <td>
                            <ol>
                                {this.state.mesGroupes.map((g) => {
                                    return <li>{g}</li>
                                })}
                            </ol>
                        </td>
                    </tr>
                    <tr>
                        <td>Client From parent</td>
                        <td>
                            <ul>
                                Nom: {this.state.monClient.client.nom}
                                <br />
                                Prenom: {this.state.monClient.client.prenom}
                            </ul>
                        </td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ChildComponent1;