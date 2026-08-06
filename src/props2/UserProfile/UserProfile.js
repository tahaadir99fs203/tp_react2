import React from "react";

const UserProfile = (props) => {
    return (
        <div>
            <h2>Username: {props.username}</h2>

            <p>Age: {props.age || 18}</p>

            {props.isAdmin && <p>This user is an admin.</p>}

            <button onClick={props.FonctionFromParent}>
                Click me
            </button>
        </div>
    );
};

export default UserProfile;