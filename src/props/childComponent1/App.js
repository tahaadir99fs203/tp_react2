import React from 'react';
import ChildComponent1 from './childComponent1v2';

class App2 extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            listeGroupe: ['Groupe1', 'Groupe2','Groupe3']
        }
    }

    render() {
        return (
            <div>
                <ChildComponent1 donnees1="bonjour" Unclient = {{client: {nom: 'abc', prenom: 'xyz'}}} listeGroupe = {this.state.listeGroupe} />
            </div>
        );
    }
}

export default App2;