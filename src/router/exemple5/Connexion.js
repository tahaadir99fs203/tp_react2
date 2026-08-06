import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Connexion()
{
 
    const navigate=useNavigate();
    const [login,setLogin]=useState({email:'',password:''})

    const getValue=(e)=>{
        setLogin(prevlogin=>({
            ...prevlogin,
            [e.target.name]:e.target.value

        }))
    }
    const connexion=(e)=>{
        if(login.email=='abc@email' && login.password=='123')
        {
            navigate("/AjouterProduit",{state:{data:login}})
        }
        else
        {
            navigate({
                pathname:"/inscription",
                search:'?error=Login incorrecte&ok=false'
            })
        }
   
    }
    return(<div>
        <fieldset>
            <legend>Connexion</legend>
            <table>
                <tr>
                    <td>Login</td>
                    <td><input type="email" name="email" onChange={getValue}/></td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td><input type="text" name="password" onChange={getValue}/></td>
                </tr>

                <tr>
                    <td></td>
                    <td><input type="button" onClick={connexion} value="Valider"/></td>
                </tr>
            </table>
        </fieldset>
    </div>)
}