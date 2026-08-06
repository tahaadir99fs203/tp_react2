import { createSlice } from "@reduxjs/toolkit"

// état initial de state.teams
const initialState = {
  teamA: "Team A",
  teamB: "Team B",
  pointsA: 0,
  pointsB: 0
}

export const TeamReducer = createSlice({
  name: "teams",
  initialState,
  reducers: {

    changeTeamA: (state, action) => {
      state.teamA = action.payload
    },

    changeTeamB: (state, action) => {
      state.teamB = action.payload
    },

    addPointsA: (state, action) => {
      state.pointsA += action.payload
    },

    addPointsB: (state, action) => {
      state.pointsB += action.payload
    },

    resetPoints: (state) => {
      state.pointsA = 0
      state.pointsB = 0
    }
  }
})

export const {
  changeTeamA,
  changeTeamB,
  addPointsA,
  addPointsB,
  resetPoints
} = TeamReducer.actions

export default TeamReducer.reducer