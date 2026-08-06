import { useState } from "react";

export default function Games()
{
    const[gamer, setGamer]=useState({
        idGamer: 1,
        nom: '',
        email: '',
        age: ''
    });
    const[listeGamers, setListeGamers]=useState([]);

    const[game, setGame]=useState({
        idGame: 1,
        titre: '',
        type: ''
    });
    const[listeGames, setListeGames]=useState([]);

    const[relation, setRelation]=useState({
        gamerId: '',
        gameId: ''
    });
    const[listeRelations, setListeRelations]=useState([]);

    const getGamer = (event) =>{
        setGamer((prevGamer)=>({
            ...prevGamer,
            [event.target.name]:event.target.value
        }));
    };

    const ajouterGamer = () => {
        if(gamer.nom!='' && gamer.email!='' && gamer.age!='') {
            setListeGamers((prevGamer) => [prevGamer, gamer]);
            setGamer({
                idGamer: gamer.idGamer+1,
                nom: '',
                email: '',
                age: ''
            });
        }
    };

    const getGame = (event) =>{
        setGame((prevGame) => ({
            ...prevGame,
            [event.target.name]:event.target.value
        }));
    };

    const ajouterGame = () =>{
        if(game.titre!='' && game.type!='') {
            setListeGames((prevGame)=>[...prevGame, game]);
            setGame({
                idGame: game.idGame+1,
                titre: '',
                type: ''
            });
        }
    };

    const getRelation = (event) =>{
        setRelation((prevRelation)=>({
            ...prevRelation,
            [event.target.name]:event.target.value
        }));
    };

    const validerRelation = () =>{
        if(relation.gamerId!='' && relation.gameId!='') {
            const gamerNom = listeGamers.find(
                (g) => g.idGamer == relation.gamerId
            )?.nom;
            const gameTitre = listeGames.find(
                (g) => g.idGame == relation.gameId
            )?.titre;

            setListeRelations((prevRelation)=>[
                ...prevRelation,
                {gamer: gamerNom, game: gameTitre}
            ]);
        }
    };

    return(
        <div>
            <fieldset>
                <legend>Gamers</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>Nom</td>
                            <td>
                                <input type="text" name="nom" value={gamer.nom} onChange={getGamer}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="email" name="email" value={gamer.email} onChange={getGamer}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>
                                <input type="number" name="age" value={gamer.age} onChange={getGamer}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="button" value="Ajouter" onClick={ajouterGamer}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>

            <h3>liste des gamers</h3>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {listeGamers.map((g)=>(
                        <tr key={g.idGamer}>
                            <td>{g.idGamer}</td>
                            <td>{g.nom}</td>
                            <td>{g.email}</td>
                            <td>{g.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
            
            <fieldset>
                <legend>Ajouter un game</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>Titre</td>
                            <td>
                                <input type="text" name="titre" value={game.titre} onChange={getGame}/>
                            </td>
                        </tr>
                        <tr>
                            <td>Type</td>
                            <td>
                                <input type="text" name="type" value={game.type} onChange={getGame}/>
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>
                                <input type="button" value="Ajouter" onClick={ajouterGame}/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
            
            <h3>liste des games</h3>
            <table border="1" cellPadding="5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titre</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {listeGames.map((g)=>(
                        <tr key={g.idGame}>
                            <td>{g.idGame}</td>
                            <td>{g.titre}</td>
                            <td>{g.type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>

            <fieldset>
                <legend>Gamer/Game</legend>
                <select name="gamerId" onChange={getRelation}>
                    <option value="">-- Selectionner un gamer --</option>
                    {listeGamers.map((g)=>(
                        <option key={g.idGamer} value={g.idGamer}>
                            {g.nom}
                        </option>
                    ))}
                </select>

                <select name="gameId" onChange={getRelation}>
                    <option value="">-- Selectionner un game --</option>
                    {listeGames.map((g)=>(
                        <option key={g.idGame} value={g.idGame}>
                            {g.titre}
                        </option>
                    ))}
                </select>
                <input type="button" value="Valider" onClick={validerRelation}/>
                
                <table border="1" cellPadding="5">
                    <thead>
                        <tr>
                            <th>Gamer</th>
                            <th>Game</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listeRelations.map((r, i)=>(
                            <tr key={i}>
                                <td>{r.gamer}</td>
                                <td>{r.game}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
}