import { createStore } from "redux";
import BookReducer from "./reducer";

const store = createStore(BookReducer);

export default store;