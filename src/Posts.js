import React, { Component } from "react";
import { FaThumbsUp, FaComment } from "react-icons/fa";
import post1 from "c:/Users/pc/tp_react/src/assets/posts/dchiwpalooza2025_02_ntwk.jpg"
import post2 from "c:/Users/pc/tp_react/src/assets/posts/1_MF5V_dkybUTcfzwHFh0VSw.jpg"
import post3 from "c:/Users/pc/tp_react/src/assets/posts/lOFPPT-e1601552964424.jpg"
import CreatePost from "./CreatePost";

class Posts extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            posts: [
                { id: 1, author: "Alice", content: "WWE WrestlePalooza ce samedi", image: post1 },
                { id: 2, author: "Bob", content: "ReactJS avec classes c'est cool", image: post2 },
                { id: 3, author: "Charlie", content: "Dates de demarrage de formation OFPPT", image: post3 },
            ],
        };
    }

    render() {
        return(
            <div className="posts">
                <CreatePost />

                {this.state.posts.map((p) => (
                    <div key={p.id} className="posts">
                        <h4>{p.author}</h4>
                        <p>{p.content}</p>
                        <img src={p.image} alt="post" className="post-image" />
                        <div className="post-actions">
                            <FaThumbsUp /> J'aime
                            <FaComment /> Commenter
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Posts;