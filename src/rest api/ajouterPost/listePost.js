import React, { Component, useEffect, useState } from "react";
import axios from "axios";

export default function ListPosts()
{
    const [listePosts, setListePosts] = useState([{}]);
    useEffect(() => {
        axios.get("http://localhost:3004/posts").then((res) => {
            setListePosts(res.data)
            console.log(listePosts)
        })
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Author</th>
                </thead>
                <tbody>
                    {listePosts.map((post) => {
                        return (
                            <tr>
                                <td>{post.id}</td>
                                <td>{post.title}</td>
                                <td>{post.author}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}