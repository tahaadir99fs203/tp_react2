import { useState } from "react";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

export default function FilmManager() {
    // Declaration de l'etat pour stocker la liste des films
    const [listeFilms, setListeFilms] = useState([]);

    // Declaration de l'etat pour stocker les informations d'un film
    const [film, setFilm] = useState({
        idFilm: 1,
        titre: '',
        duree: '',
        genre: ''
    })

    // Fonction pour recuperer les informations saisies par l'utilisateur pour un film
    const getFilmInfo = (event) => {
        const { value, name } = event.target
        setFilm(prevFilm => ({
            ...prevFilm, [name]: value
        }))
        console.log(film);
    }

    // Fonction pour ajouter un film a la liste des films
    const ajouterFilm = () => {
        if (film.titre !== "" && film.duree !== 0 && film.genre) {
            setListeFilms(prevListFilm => (
                [...prevListFilm, film]
            ))
            setFilm(prevFilm => ({
                idFilm: film.idFilm + 1,
                titre: '',
                duree: '',
                genre: ''
            }))
        } else {
            alert('Tous les champs sont obligatoires')
        }
    }

    return (
        <div className="container mt-5 text-warning">
            <fieldset className="w-75 mx-auto mb-3">
                <legend className="text-center">Ajouter un film</legend>

                {/* Formulaire pour saisir les informations d'un film */}
                <form>
                    <div className="form-group">
                        <label>Titre</label>
                        <input type="text" className="form-control" name="titre" onChange={getFilmInfo} value={film.titre} />
                    </div>
                    <div className="form-group">
                        <label>Duree</label>
                        <input type="number" className="form-control" name="duree" onChange={getFilmInfo} value={film.duree} />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <input type="text" className="form-control" name="genre" onChange={getFilmInfo} value={film.genre} />
                    </div>
                    <div className="form-group">
                        <input type="button" value="Ajouter" className="btn btn-info fw-bold d-flex mx-auto bt-sm mt-3" onClick={ajouterFilm} />
                    </div>
                </form>
            </fieldset>

            <h3 className="text-center text-white fw-bold">Liste des films</h3>
            <table className="table table-bordered table-sm w-75 mx-auto">
                <thead className="bg-info text-white text-center">
                    <tr>
                        <th>Id</th>
                        <th>Titre</th>
                        <th>Genre</th>
                        <th>Duree</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listeFilms.map((f) => {
                            return (
                                <tr key={f.idFilm}>
                                    <td>{f.idFilm}</td>
                                    <td>{f.titre}</td>
                                    <td>{f.genre}</td>
                                    <td>{f.duree}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}