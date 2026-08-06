import React, { Component } from "react";

export default class PaysInfo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { nom, capital } = this.props.pays;
        return (
            <div>
                <h2>Nom du pays: {nom}</h2>
                <p>Capital: {capital}</p>
            </div>
        );
    }
}