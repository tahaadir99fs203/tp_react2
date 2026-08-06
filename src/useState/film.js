import { useState } from "react"

export default function ListeFilms()
{
    const [film, setFilm] = useState({
        idFilm: 1,
        titre: '',
        duree: 0,
        genre: ''
    })

    const[listeFilms, setListesFilms] = useState([])

    const getFilm = (event) =>{
        setFilm(prevFilm=>({
            ...prevFilm,
            [event.target.name]:event.target.value
        }))
    }

    const ajouterFilm=()=>{
        if(film.titre!='' && film.genre!='' && film.duree>0) {
            setListesFilms((prevListeFilms)=>(
                [...prevListeFilms, film]
            ))

            setFilm({
                idFilm: film.idFilm+1,
                titre: '',
                genre: '',
                duree: 0
            })
        }
    }

    return(
        <div>
            <fieldset>
                <legend>Ajouter un film</legend>
                <table>
                    <tr>
                        <td>Titre</td>
                        <td><input type="text" name="titre" onChange={getFilm} value={film.titre}/></td>
                    </tr>
                    <tr>
                        <td>Duree</td>
                        <td><input type="number" name="duree" onChange={getFilm} value={film.duree}/></td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td><input type="text" name="genre" onChange={getFilm} value={film.genre}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="button" value="Ajouter" onClick={ajouterFilm}/></td>
                    </tr>
                </table>
            </fieldset>
            <h3>Listes Films</h3>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Titre</th>
                    <th>Genre</th>
                    <th>Duree</th>
                </thead>
                <tbody>
                    {
                        listeFilms.map((f)=>{
                            return(
                                <tr>
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