import React, { useEffect, useState } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { addComment, deleteComment, deletePost, dislike, likePost } from "./PostActions";
import "./listePosts.css"; // Import the CSS file

export default function AfficherListePosts()
{
   let listePosts=useSelector(state=>state.postReducer.posts)
 const [comment,setComment]=useState({"texte":'',"id":0})
    const Dispatch=useDispatch ();

const AddComment=(idpost)=>{
   if(comment.texte!="")
   {
    setComment({...comment,
                 id:Date.now()})
    Dispatch(addComment(idpost,comment))
   }
 }

 const disLike=(idpost)=>{
    Dispatch(dislike(idpost))
 }

 const like=(idpost)=>{
    Dispatch(likePost(idpost))
    
 }

 const supprimerPost=(idpost)=>{
   Dispatch(deletePost(idpost))
 }

 const supprimerComment=(idpost,idcomment)=>
 {
   Dispatch(deleteComment(idpost,idcomment))
 }

    return(<div>
<ul>
    {listePosts.map((post)=>{
        return (<li style={{"background":"#efefef","margin":"10px"}}>
            <div style={{"background":"#000","color":"#fff","padding":"5px"}}>
            <span style={{"width":"88%","float":"left"}}>
                   {post.texte} 
            </span>
           <input type="button" onClick={()=>supprimerPost(post.id)} value="X" style={{"background":"red","font-size":"8px"}}/>
           <input type="button" value="Edit" style={{"background":"green","font-size":"8px"}}/>

<br/>

             <input type="button" onClick={()=>like(post.id)} value={"Like " +post.likes}/>
             <input type="button" onClick={()=>disLike(post.id)} value="Dislike"/>
             </div>
             Listes Comments:<br/>
           <ol style={{"background":"yellow"}}>
            {post.comments.map((com)=>{
                return (<li>
                
                  <span style={{"width":"93%","float":"left"}}>
                   {com.texte}
                   </span>
                   <input type="button" onClick={()=>supprimerComment(post.id,com.id)} value="X" style={{"background":"red","font-size":"8px"}}/>
                </li>)
            })}
           </ol>
           <input type="text"name="texte" onChange={(event)=>setComment({...comment,"texte":event.target.value})} />
           <input type="button" onClick={()=>AddComment(post.id)} value="Add Comment"/>

        </li>)
    })}
</ul>
    </div>)
}