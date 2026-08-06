import { createStoreHook } from "react-redux";
import WhatsAppReducer from "./WhatsAppReducer";
import { createStore } from "redux";

const store = createStore(WhatsAppReducer);

export default store;