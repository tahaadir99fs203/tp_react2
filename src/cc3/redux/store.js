import { createStore } from "redux";
import productReducer from "./productReducer";

const store = createStore(
    productReducer,
    window.__REDUX_CEV
)