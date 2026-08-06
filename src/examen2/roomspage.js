import React from "react";
import RoomsList from "./roomslist";

export default function RoomsPage({ rooms }) {
    return (
        <div>
            <h3>Salles disponibles</h3>
            <RoomsList rooms={rooms} />
        </div>
    );
}