import React, { useState } from "react";

export default function App()
{
    const [livres, setLivres] = useState([
        { id: 1, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupery', categorie: 'Roman', annee: 1943, disponible: true, emprunteur: '' },
        { id: 2, titre: '1984', auteur: 'George Orwell', categorie: 'Roman', annee: 1949, disponible: false, emprunteur: 'Jean Dupont' }
    ]);
    const [form, setForm] = useState({ titre: '', auteur: '', categorie: '', annee: '', disponible: true, emprunteur: '' });
    const [recherche, setRecherche] = useState('');
    const [editId, setEditId] = useState(null);

    const ajouterLivre = () => {
        if(!form.titre || !form.auteur) {
            alert('Veuillez remplir les champs titre et auteur');
            return;
        }
        const nouveau = {...form, id: Date.now(), annee: parseInt(form.annee)};
        setLivres([...livres, nouveau]);
        setForm({ titre: '', auteur: '', categorie: '', annee: '', disponible: true, emprunteur: ''});
    };

    const modifierLivre = () => {
        setLivres(livres.map(l => (l.id === editId ? {...form, id: editId, annee: parseInt(form.annee)} : 1)));
        setEditId(null);
        setForm({titre: '', auteur: '', categorie: '', annee: '', disponible: true, emprunteur: ''});
    };

    const supprimerLivre = id => setLivres(livres.filter(l => l.id !== id));

    const commencerEdition = livre => {
        setEditId(livre.id);
        setForm({...livre, annee: livre.annee.toString()});
    };

    const basculerStatut = id => {
        setLivres(livres.map(l => (l.id === id ? {...l, disponible: !l.disponible, emprunteur: l.disponible ? 'Jean Dupont' : ''} : l)));
    };

    const livresFiltres = livres.filter(l => 
        l.titre.toLowerCase().includes(recherche.toLowerCase()) ||
        l.auteur.toLowerCase().includes(recherche.toLowerCase()) ||
        l.categorie.toLowerCase().includes(recherche.toLowerCase())
    );

    const total = livres.length;
    const dispo = livres.filter(l => l.disponible).length;
    const empruntes = total - dispo;
    const nbCat = [...new Set(livres.map(l => l.categorie))].length;

    return(
        <div>
            <div>
                <h3>{editId ? 'Modifier un livre' : 'Ajouter un livre'}</h3>
                <input placeholder="Titre" value={form.titre} onChange={e => setForm({...form, titre: e.target.value})}/>
                <input placeholder="Auteur" value={form.auteur} onChange={e => setForm({...form, auteur: e.target.value})}/>
                <input placeholder="Categorie" value={form.categorie} onChange={e => setForm({...form, categorie: e.target.value})}/>
                <input type="number" placeholder="Annee" value={form.annee} onChange={e => setForm({...form, annee: e.target.value})}/>

                {editId ? (
                    <>
                        <button onClick={modifierLivre}>Modifier</button>
                        <button onClick={() => setEditId(null)}>Annuler</button>
                    </>
                ) : (
                    <button onClick={ajouterLivre}>Ajouter</button>
                )}
            </div>

            <div>
                <h3>Recherche</h3>
                <input placeholder="Rechercher par titre/auteur" value={recherche} onChange={e => setRecherche(e.target.value)}/>
            </div>

            <div>
                <h3>Liste des livres</h3>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Auteur</th>
                            <th>Categorie</th>
                            <th>Annee</th>
                            <th>Statut</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livresFiltres.map(l => (
                            <tr key={l.id}>
                                <td>{l.titre}</td>
                                <td>{l.auteur}</td>
                                <td>{l.categorie}</td>
                                <td>{l.annee}</td>
                                <td>{l.disponible ? 'Disponible' : `${l.emprunteur}`}</td>
                                <td>
                                    <button onClick={() => commencerEdition(l)}>Modifier</button>
                                    <button onClick={() => supprimerLivre(l.id)}>Supprimer</button>
                                    <button onClick={() => basculerStatut(l.id)}>{l.disponible ? 'Emprunter' : 'Retourner'}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div>
                <h3>Statistiques de la biblotheque</h3>
                <p>Nombre total de livres: {total}</p>
                <p>Livres disponibles: {dispo}</p>
                <p>Livres empruntes: {empruntes}</p>
                <p>Categories: {nbCat}</p>
            </div>
        </div>
    );
}