import React from "react";

export default function BookingsList({ bookings, users, rooms }) {
    if (!bookings || bookings.length === 0) return <p>Aucune reservation.</p>;
    return (
        <ul>
            {bookings.map(b => {
                const user = users.find(u => u.id === b.userId);
                const room = rooms.find(r => r.id === b.roomId);
                return (
                    <li key={b.id}>
                        <strong>{room?.name}</strong>
                        <div style={{fontSize:12, color:"#555"}}>Par: {user?.name}</div>
                    </li>
                );
            })}
        </ul>
    );
}