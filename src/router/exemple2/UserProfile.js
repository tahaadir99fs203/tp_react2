import React, { use } from "react";
import { useParams } from "react-router-dom";

export default function UserProfile() {
    const { username } = useParams();

    return (<h2>Profil de {username}</h2>);
}