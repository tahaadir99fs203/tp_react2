import React, { Component } from "react";

class BookInfo2 extends Component
{
    constructor(props)
    {
        super(props)
    }

    render() {
        const { title, author, year } = this.props.book;
        return (
            <div>
                <h2>Titre: {title}</h2>
                <p>Auteur: {author}</p>
                <p>Annee de publication: {year}</p>
            </div>
        );
    }
}

export default BookInfo2;