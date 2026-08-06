import React from "react";

function PlayerCard({ name, goals, assists })
{
    return (
        <div>
            <h4>{name}</h4>
            <p>Buts : {goals} | Passes decisives : {assists}</p>
            <hr />
        </div>
    );
}

export default PlayerCard;