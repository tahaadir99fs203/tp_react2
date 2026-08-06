import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RoomsPage from "./roomspage";
import BookingsPage from "./bookingspage";
import AddBooking from "./addbooking";

function App() {
    const [data, setData] = useState({
        users: [{ id: 1, name: "Amina" }],
        rooms: [{ id: 1, name: "Room A", price: 300 }],
        bookings: []
    });

    const createBooking = (booking) => {
        const newBooking = { ...booking, id: Date.now() };
        setData(prev => ({ ...prev, bookings: [...prev.bookings, newBooking] }));
    };

    return (
        <Router>
            <header style={{padding:8, borderBottom:"1px solid #ddd"}}>
                <Link to="/">Accueil</Link>{" | "}<Link to="/rooms">Salles</Link>{" | "}<Link to="/bookings">Reservations</Link>
            </header>

            <main style={{padding:12}}>
                <Routes>
                    <Route path="/" element={<h2>Systeme de reservation</h2>} />
                    <Route path="/rooms" element={<RoomsPage rooms={data.rooms} />} />
                    <Route path="/bookings" element={<BookingsPage bookings={data.bookings} users={data.users} rooms={data.rooms} />} />
                    <Route path="/bookings/add" element={<AddBooking users={data.users} rooms={data.rooms} onCreate={createBooking} bookings={data.bookings} />} />
                    <Route path="/bookings/:id" element={<div>Detail reservation (optionnel</div>} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;