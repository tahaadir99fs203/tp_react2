import React from "react";

function MatchCard({ teamA, teamB, score })
{
    return (
        <div>
            <p>{teamA} vs {teamB}</p>
            <p>Score : {score}</p>
            <hr />
        </div>
    );
}

export default MatchCard;