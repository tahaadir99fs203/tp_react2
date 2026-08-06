import React, { useState, useEffect } from "react";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

export default function StoreValue() {
    const [storeValue, setStoreValue] = useState(window.localStorage.getItem('storeValue'))

    useEffect(() => {
        const getVal = window.localStorage.getItem('storeValue')
        if (getVal) {
            setStoreValue(parseFloat(getVal))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('storeValue', storeValue.toString())
    }, [storeValue])

    const increment = () => {
        setStoreValue(storeValue + 1)
    }

    const decrement = () => {
        setStoreValue(storeValue - 1)
    }

    const reset = () => {
        setStoreValue(0)
    }

    return (
        <div className="container mt-5">
            <div className="bg-secondary text-white rounded-4 p-4 text-center shadow">

                <h2 className="fw-bold mb-3">
                    Store value in local storage
                </h2>
                
                <h3 className="mb-4">
                    {storeValue}
                </h3>

                <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-warning fw-semibold" onClick={decrement}>
                        Decrement
                    </button>

                    <button className="btn btn-success fw-semibold" onClick={increment}>
                        Increment
                    </button>

                    <button className="btn btn-danger fw-semibold" onClick={reset}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    )
}