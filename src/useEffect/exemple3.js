import React, { useEffect, useState } from "react";

function LocalStorageExemple()
{
    const [count, setCount] = useState(0);

    useEffect(() => {
        const storedCount = localStorage.getItem('count');
        if(storedCount) {
            setCount(Number(storedCount));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('count', count.toString());
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    };

    return(
        <div>
            <h2>Local Storage exemple</h2>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default LocalStorageExemple;