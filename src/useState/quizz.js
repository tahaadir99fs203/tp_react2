import React, { useState } from "react";
import './quizz.css';

export default function Quizz()
{
    const quizz = [
        {
            question: '1+1=?',
            choix1: '2',
            choix2: '4',
            choixCorrect: 1
        },
        {
            question: 'Capitale du Maroc?',
            choix1: 'Casablanca',
            choix2: 'Rabat',
            choixCorrect: 2
        },
        {
            question: '5*8=?',
            choix1: '40',
            choix2: '45',
            choixCorrect: 1
        }
    ];
    const[points, setPoints] = useState(0);
    const[indexQuestionActuelle, setIndexQuestionActuelle]=useState(0);
    const[disableAvant, setDisableAvant]=useState('');
    const[disableSuivant, setDisableSuivant]=useState('');
    const[choixCorrect, setChoixCorrect]=useState(quizz[0].choixCorrect);
    const[bloquer, setBloquer]=useState('');

    const suivant = () =>{
        if(indexQuestionActuelle<quizz.length-1) {
            setIndexQuestionActuelle(indexQuestionActuelle+1);
            setChoixCorrect(quizz[indexQuestionActuelle+1].choixCorrect);
            setBloquer('');
            setDisableAvant('');
        } else {
            setDisableSuivant('Disabled')
        }
    };

    const avant = () =>{
        if(indexQuestionActuelle>0) {
            setIndexQuestionActuelle(indexQuestionActuelle-1);
            setChoixCorrect(quizz[indexQuestionActuelle-1].choixCorrect);
            setBloquer('');
            setDisableSuivant('');
        } else {
            setDisableAvant('Disabled');
        }
    };

    const verifier = (e) =>{
        setBloquer('Disabled');
        const choix = e.target.name;
        const choixCorrect = quizz[indexQuestionActuelle].choixCorrect;

        if(choix===`choix${choixCorrect}`) {
            setPoints(points+5);
        } else {
            setPoints(points-5);
        }
    };

    return(
        <div>
            <fieldset>
                <legend>Quizz Game</legend>
                <h1 style={{background: '#eee'}}><center>{quizz[indexQuestionActuelle].question}</center></h1>
                <table>
                    <tbody>
                        <tr>
                            <td><button name="choix1" disabled={bloquer} className="width100" onClick={verifier}>{quizz[indexQuestionActuelle].choix1}</button></td>
                            <td><button name="choix2" disabled={bloquer} className="width100" onClick={verifier}>{quizz[indexQuestionActuelle].choix2}</button></td>
                        </tr>
                    </tbody>
                </table>
                <h1 style={{background: '#45ff12'}}><center>Points: <b>{points}</b></center></h1>
                <table>
                    <tbody>
                        <tr>
                            <td><button disabled={disableAvant} onClick={avant} className="width100">Avant</button></td>
                            <td><button disabled={disableSuivant} onClick={suivant} className="width100">Suivant</button></td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>
        </div>
    );
}