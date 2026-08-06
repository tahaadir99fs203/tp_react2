import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  goalTeamA,
  goalTeamB,
  resetMatch
} from "../reducers/matchreducer"

export default function MatchComponent() {

  const match = useSelector((state) => state.match)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Match</h3>

      <p>Score A : {match.scoreA}</p>
      <p>Score B : {match.scoreB}</p>

      <button onClick={() => dispatch(goalTeamA())}>But A</button>
      <button onClick={() => dispatch(goalTeamB())}>But B</button>
      <button onClick={() => dispatch(resetMatch())}>Reset</button>
    </div>
  )
}