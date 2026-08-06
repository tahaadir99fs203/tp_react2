import { useState } from "react";

export default function UseStateExemple1()
{
    const[nom, setNom]=useState("abc")

    return(
        <div>
            {nom}
            <input type="button" onClick={()=>setNom("xyz")} value="modifier"/>
            <input type="text" onChange={(event)=>setNom(event.target.value)}/>
        </div>
    )
}