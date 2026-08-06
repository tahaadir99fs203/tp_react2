import React, { useState, useEffect } from "react";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

export default function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const increment = setInterval(() => {
            setCounter((counter) => counter + 1)
        }, 1000)

        return () => {
            clearInterval(increment)
        }
    }, [counter])

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="bg-success text-white text-center p-4 rounded">
                        <h1 className="fw-bold">Set Interval Counter</h1>
                        <h3 className="mt-2">
                            <span className="fw-bold">{counter}</span> seconds have passed
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}