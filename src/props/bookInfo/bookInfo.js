import React, { Component } from "react";

class BookInfo extends Component
{
    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div>
                <h2>Titre: {this.props.title}</h2>
                <p>Auteur: {this.props.author}</p>
                <p>Annee de publication: {this.props.year}</p>
            </div>
        );
    }
}

export default BookInfo;