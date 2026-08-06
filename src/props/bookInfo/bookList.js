import React, { Component } from "react";
import BookInfo from "./bookInfo";

class BookList extends Component
{
    constructor(props)
    {
        super(props)
    }
    
    render() {
        return (
            <div>
                <h1>Liste de livres</h1>
                <BookInfo title="Harry Potter" author="J.K. Rowling" year="1997" />
                <BookInfo title="To Kill a Mockingbird" author="Harper Lee" year="1960" />
                <BookInfo title="The Great Gatsby" author="F. Scott Fitzgerald" year="1925" />
            </div>
        );
    }
}

export default BookList;