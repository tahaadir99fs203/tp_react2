import { createSlice } from "@reduxjs/toolkit"
import { addPointsA, addPointsB } from "./teamreducer"

// état initial de state.match
const initialState = {
  scoreA: 0,
  scoreB: 0
}

export const MatchReducer = createSlice({
  name: "match",
  initialState,
  reducers: {

    goalTeamA: (state) => {
      state.scoreA += 1
    },

    goalTeamB: (state) => {
      state.scoreB += 1
    },

    finishMatch: (state, action) => {
      if (state.scoreA > state.scoreB) {
        action.asyncDispatch(addPointsA(3))
      } else if (state.scoreA < state.scoreB) {
        action.asyncDispatch(addPointsB(3))
      } else {
        action.asyncDispatch(addPointsA(1))
        action.asyncDispatch(addPointsB(1))
      }
    },

    resetMatch: (state) => {
      state.scoreA = 0
      state.scoreB = 0
    }
  }
})

export const {
  goalTeamA,
  goalTeamB,
  finishMatch,
  resetMatch
} = MatchReducer.actions

export default MatchReducer.reducer