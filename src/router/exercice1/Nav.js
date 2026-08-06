import React from "react";
import { Link } from "react-router-dom";

function Nav()
{
    return (
        <div>
            <nav>
                <Link to="/teams">Equipes</Link> |{" "}
                <Link to="/players">Joueurs</Link> |{" "}
                <Link to="/matches">Matchs</Link>
            </nav>
            <hr />
        </div>
    );
}

export default Nav;