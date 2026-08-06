export function isRoomAvailable(roomId, start, end, bookings) {
    const s = new Date(start);
    const e = new Date(end);
    if (isNaN(s) || isNaN(e) || e < s) return false;
    const conflicts = bookings.filter(b => b.roomId === roomId && !(new Date(b.end) < s || new Date(b.start) > e));
    return conflicts.length === 0;
}

export function calculateBookingTotal(pricePerNight, start, end) {
    const s = new Date(start);
    const e = new Date(end);
    const msPerDay = 24 * 60 * 60 * 1000;
    const diff = Math.round((e - s) / msPerDay);
    const nights = Math.max(0, diff + 1);
    return pricePerNight * nights;
}