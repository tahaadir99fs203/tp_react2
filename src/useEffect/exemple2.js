import React, { useEffect, useState } from "react";

export default function Timer()
{
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return(
        <div>
            <h2>Compteur de seconds</h2>
            <p>{seconds} secondes</p>
        </div>
    );
}