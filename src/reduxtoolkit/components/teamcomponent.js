import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeTeamA, changeTeamB } from "../reducers/teamreducer"

export default function TeamComponent() {

  const teams = useSelector((state) => state.teams)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Équipes</h3>

      <input
        type="text"
        value={teams.teamA}
        onChange={(e) => dispatch(changeTeamA(e.target.value))}
      />

      <br /><br />

      <input
        type="text"
        value={teams.teamB}
        onChange={(e) => dispatch(changeTeamB(e.target.value))}
      />

      <p>{teams.teamA} : {teams.pointsA} pts</p>
      <p>{teams.teamB} : {teams.pointsB} pts</p>
    </div>
  )
}