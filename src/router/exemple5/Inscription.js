import React from "react"
import { useSearchParams } from "react-router-dom"
export default function Inscription()
{
    //récupérer les paramètre envoyé via search: dans navigate
    const [searchParams]=useSearchParams();
    const monError=searchParams.get("error")
    const ok=searchParams.get("ok")
   
    return (<div>Inscription:{monError}<br/>
    {ok}</div>)
}