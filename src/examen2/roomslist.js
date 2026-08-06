import React from "react";

export default function RoomsList({ rooms }) {
    return (
        <ul>
            {rooms.map(r => (
                <li key={r.id}>
                    <strong>{r.name}</strong> - {r.price} MAD / nuit
                </li>
            ))}
        </ul>
    );
}