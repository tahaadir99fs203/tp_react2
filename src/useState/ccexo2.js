import React, { useState } from "react";

export default function EtudiantCRUD()
{
    const[etudiants, setEtudiants] = useState([]);
    const[formData, setFormData] = useState({
        id: '',
        nom: '',
        prenom: '',
        classe: '',
        math: '',
        francais: '',
        anglais: ''
    });
    const[search, setSearch] = useState('');
    const[editIndex, setEditIndex] = useState(-1);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newEtudiant = {
            id: formData.id || Date.now(),
            nom: formData.nom,
            prenom: formData.prenom,
            classe: formData.classe,
            notes: {
                math: parseFloat(formData.math) || 0,
                francais: parseFloat(formData.francais) || 0,
                anglais: parseFloat(formData.anglais) || 0
            }
        };
        if(editIndex===-1) {
            setEtudiants([...etudiants, newEtudiant]);
        } else {
            const updated = [...etudiants];
            updated[editIndex] = newEtudiant;
            setEtudiants(updated);
            setEditIndex(-1);
        }

        setFormData({
            id: '',
            nom: '',
            prenom: '',
            classe: '',
            math: '',
            francais: '',
            anglais: ''
        });
    };

    const supprimerEtudiant = (index) => {
        const updated = etudiants.filter((_, i)=>i !== index);
        setEtudiants(updated);
    };

    const modifierEtudiant = (index) => {
        const e = etudiants[index];
        setFormData({
            id: e.id,
            nom: e.nom,
            prenom: e.prenom,
            classe: e.classe,
            math: e.notes.math,
            francais: e.notes.francais,
            anglais: e.notes.anglais
        });
        setEditIndex(index);
    };

    const filtrerEtudiants = etudiants.filter(
        (event) =>
            event.nom.toLowerCase().includes(search.toLowerCase()) ||
            event.prenom.toLowerCase().includes(search.toLowerCase()) ||
            event.classe.toLowerCase().includes(search.toLowerCase())
    );

    const moyenne = (notes) => ((notes.math + notes.francais + notes.anglais) / 3).toFixed(2);
    const moyenneGenerale = 
        etudiants.length > 0
          ? (
            etudiants.reduce(
                (acc, e) => acc + parseFloat(moyenne(e.notes)),
                0
            ) / etudiants.length
          ).toFixed(2)
    : 0;
    
    const meuilleurEtudiant =
    etudiants.length > 0
    ? etudiants.reduce((best, e) =>
        moyenne(e.notes) > moyenne(best.notes) ? e : best
    )
    : null;

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={formData.nom} onChange={(event) => setFormData({...formData, nom: event.target.value})}/>
                <input type="text" value={formData.prenom} onChange={(event) => setFormData({...formData, prenom: event.target.value})}/>
                <input type="text" value={formData.classe} onChange={(event) => setFormData({...formData, classe: event.target.value})}/>
                <input type="number" value={formData.math} onChange={(event) => setFormData({...formData, math: event.target.value})}/>
                <input type="number" value={formData.francais} onChange={(event) => setFormData({...formData, francais: event.target.value})}/>
                <input type="number" value={formData.anglais} onChange={(event) => setFormData({...formData, anglais: event.target.value})}/>
                <button type="submit">{editIndex === -1 ? 'Ajouter' : 'Modifier'}</button>
            </form>

            <hr/>
            <input type="text" value={search} onChange={(event) => setSearch(event.target.value)}/>

            <table border="1">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Classe</th>
                        <th>Maths</th>
                        <th>Francais</th>
                        <th>Anglais</th>
                        <th>Moyenne</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filtrerEtudiants.map((e, index) => (
                        <tr key={e.id}>
                            <td>{e.nom}</td>
                            <td>{e.prenom}</td>
                            <td>{e.classe}</td>
                            <td>{e.notes.math}</td>
                            <td>{e.notes.francais}</td>
                            <td>{e.notes.anglais}</td>
                            <td>{moyenne(e.notes)}</td>
                            <td>
                                <button onClick={() => modifierEtudiant(index)}>Modifier</button>
                                <button onClick={() => supprimerEtudiant(index)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>    
            </table>
            
            <p>Moyenne generale de la classe: <strong>{moyenneGenerale}</strong></p>

            {meuilleurEtudiant && (       
                <p>
                    Meuilleur etudiant: <strong>{meuilleurEtudiant.nom} {meuilleurEtudiant.prenom}</strong> avec une moyenne de <strong>{moyenne(meuilleurEtudiant.notes)}</strong>
                </p>
            )};
        </div>
    );
}    