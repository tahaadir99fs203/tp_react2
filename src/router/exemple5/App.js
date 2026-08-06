import React from 'react';
import {useNavigate,Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import AjouterProduit from './AjouterProduit'
import Connexion from './Connexion';
import Inscription from './Inscription';

function App(props){

 const  navigate=useNavigate();

      return (
        <div>
         <table className="nav">
         
        <tr>
         
          <td><button onClick={()=>{navigate(-1)}}>&lt;</button></td>
          <td><button onClick={()=>{navigate(1)}}>&gt;</button></td>
       
          <td><a href="/connexion">Connexion</a></td>
          <td><a href="/inscription">Inscription</a></td>
          <td><a href="/AjouterProduit">Ajouter Produit</a></td>

        </tr>
      </table>
      <Routes>
 
  <Route path='/AjouterProduit' element={<AjouterProduit />} />
  <Route path='/connexion' element={<Connexion />} />
  <Route path='/inscription' element={<Inscription />} />
</Routes>
    </div>
       
      )
             
    }
    export default App;