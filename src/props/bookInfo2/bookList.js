import React, { Component } from "react";
import BookInfo2 from "./bookInfo2";

class BookList2 extends Component
{
    constructor(props)
    {
        super(props)
    }

    render() {
        const books = [
            { title: "Harry Potter", author: "J.K. Rowling", year: "1997" },
            { title: "To Kill a Mockingbird", author: "Harper Lee", year: "1960" },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: "1925" }
        ];

        return (
            <div>
                <h1>Liste de livres</h1>
                {books.map((book, index) => (
                    <BookInfo2 key={index} book={book}/>
                ))}
            </div>
        );
    }
}

export default BookList2;