import { createStore, combineReducers } from "redux";
import clientReducer from "./clientReducer";
import produitReducer from "./produitReducer";
import commandeReducer from "./commandeReducer";

const rootReducer = combineReducers({
    clients: clientReducer,
    produits: produitReducer,
    commandes: commandeReducer,
});

const store = createStore(rootReducer);

export default store;