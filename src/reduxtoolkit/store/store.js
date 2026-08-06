import { configureStore } from "@reduxjs/toolkit"
import TeamReducer from "../reducers/teamreducer"
import MatchReducer from "../reducers/matchreducer"

export const store = configureStore({
  reducer: {
    teams: TeamReducer,
    match: MatchReducer
  }
})
