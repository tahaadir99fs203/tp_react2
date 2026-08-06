import PostReducer from "./PostReducer";
import { createStore, combineReducers } from "redux";
const rootReducer = combineReducers({
    postReducer: PostReducer,
});

const store = createStore(rootReducer);

export default store;