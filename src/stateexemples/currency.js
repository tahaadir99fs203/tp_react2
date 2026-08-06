import React, { Component } from "react";

class CurrencyConverter extends Component
{
    constructor() {
        super();
        this.state={
            montantUSD: '',
            resultatEUR: '',
            taux: 0.85
        };
    }

    changerMontant=(e)=>{
        this.setState({
            montantUSD: e.target.value
        });
    }

    convertir=()=>{
        let montant=parseFloat(this.state.montantUSD);
        if(!isNaN(montant)){
            let conversion=montant*this.state.taux;
            this.setState({
                resultatEUR: conversion.toFixed(2)
            });
        } else {
            this.setState({
                resultatEUR: 'Veuillez entrer un nombre valide'
            });
        }
    }

    render(){
        return(
            <div>
                <label>Montant en USD</label>
                <input
                type="text"
                value={this.state.montantUSD}
                onChange={this.changerMontant}
                />
                <button onClick={this.convertir}>Convertir</button>
                <p>Montant en EUR: {this.state.resultatEUR}</p>
            </div>
        );
    }
}
export default CurrencyConverter;