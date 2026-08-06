import React from "react";

function TeamCard({ name, country })
{
    return (
        <div>
            <h4>{name}</h4>
            <p>Pays : {country}</p>
            <hr />
        </div>
    );
}

export default TeamCard;