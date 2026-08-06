import React, { useState } from "react";

const Eliminatoires = ({ qualifies }) => {
  const initR16 = [];
  for(let i=0;i<16;i+=2){
    initR16.push({ teamA: qualifies[i], teamB: qualifies[i+1], scoreA:"", scoreB:"", winner:"" });
  }

  const [r16,setR16]=useState(initR16);
  const [champion,setChampion]=useState("");

  const handleScore=(idx,field,value)=>{
    const copy=[...r16];
    copy[idx][field]=value;
    setR16(copy);
  };

  const valider=(idx)=>{
    const match=r16[idx];
    const a=parseInt(match.scoreA,10);
    const b=parseInt(match.scoreB,10);
    let winner="";
    if(a>b) winner=match.teamA;
    else if(b>a) winner=match.teamB;
    else winner=prompt(`Égalité ${match.teamA}-${match.teamB}, entrer le vainqueur:`);

    const copy=[...r16];
    copy[idx].winner=winner;
    setR16(copy);
    if(idx===7)setChampion(winner); // simple : champion final du 16ème match pour démo
  };

  return (
    <div>
      <h2>Phase Éliminatoire</h2>
      {r16.map((m,idx)=>(
        <div key={idx}>
          {m.teamA} <input type="number" value={m.scoreA} onChange={(e)=>handleScore(idx,"scoreA",e.target.value)}/> -
          <input type="number" value={m.scoreB} onChange={(e)=>handleScore(idx,"scoreB",e.target.value)}/> {m.teamB}
          <button onClick={()=>valider(idx)}>Valider Vainqueur</button>
          {m.winner && <span> → {m.winner}</span>}
        </div>
      ))}
      {champion && <h2>🏆 Champion : {champion}</h2>}
    </div>
  );
};

export default Eliminatoires;