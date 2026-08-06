import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isRoomAvailable, calculateBookingTotal } from "./bookingutil";

export default function AddBooking({ users, rooms, onCreate, bookings }) {
    const [userId, setUserId] = useState(users[0]?.id || "");
    const [roomId, setRoomId] = useState(rooms[0]?.id || "");
    const [start, setStart] =  useState("");
    const [end, setEnd] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submit = (e) => {
        e.preventDefault();
        if (!start || end) { setError("Veuillez preciser les dates de debut de fin de reservation"); return; }
        if (!isRoomAvailable(Number(roomId), start, end, bookings)) {
            setError("Salle indisponible pour ces dates.");
            return;
        }
        const room = rooms.find(r => r.id === Number(roomId));
        const total = calculateBookingTotal(room.price, start, end);
        onCreate({ userId: Number(userId), roomId: Number(roomId), start, end, total });
        navigate("/bookings");
    };

    return (
        <div>
            <h3>Creer reservation</h3>
            {error && <div style={{color:"red"}}>{error}</div>}
            <form onSubmit={submit}>
                <div>
                <label>Utilisateur</label><br />
                <select value={userId} onChange={(e) => setUserId(e.target.value)}>
                    {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                </select>
                </div>

                <div>
                    <label>Salle</label><br />
                    <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
                        {rooms.map(r => <option key={r.id} value={r.id}>{r.name} - {r.price} MAD/nuit</option>)}
                    </select>
                </div>

                <div>
                    <label>Debut</label><br />
                    <input type="date" value={start} onChange={(e) => setStart(e.target.value)} />
                </div>

                <div>
                    <label>Fin</label><br />
                    <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} />
                </div>

                <div style={{marginTop:8}}>
                    <button type="submit">Reserver</button>
                </div>
            </form>
        </div>
    );
}