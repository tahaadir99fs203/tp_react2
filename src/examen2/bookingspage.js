import React from "react";
import BookingsList from "./bookinglist";
import { Link } from "react-router-dom";

export default function BookingsPage({ bookings, users, rooms }) {
    return (
        <div>
            <h3>Reservations</h3>
            <p><Link to="/bookings/add">Nouvelle reservation</Link></p>
            <BookingsList bookings={bookings} users={users} rooms={rooms} />
        </div>
    );
}