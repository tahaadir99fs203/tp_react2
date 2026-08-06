import React from 'react';
import {useNavigate,Route,Routes} from 'react-router-dom'
import ListPosts from './listePost';
import AddPost from './addPost';


function App(props){

 

      return (
        <div>
          <table className='table'>
            <tr>
              <td><a href="/posts">Listes Post</a></td>
              <td><a href="/posts/add">Ajouter nouveau posts</a></td>
              <td><a href="/comments">Liste Commentaires</a></td>
              <td><a href="/comments/add">Ajouter un nouveau commentaire</a></td>
            </tr>
          </table>
          <Routes>
            <Route path='/posts' element={<ListPosts />} />
            <Route path='/posts/add' element={<AddPost />} />
           
          </Routes>
       
    </div>
       
      )
       
     
     
    }
    export default App;