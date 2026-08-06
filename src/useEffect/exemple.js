import { useEffect, useState } from "react";

export default function ExampleComponent()
{
    const [message, setMessage] = useState('');

    useEffect(() => {
        setMessage('Le composant est monte!');
    }, []);

    return(
        <div>
            <h2>Exemple d'utilisation de useEffect</h2>
            <p>{message}</p>
        </div>
    );
}