import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import clientReducer from "./clientSlice";
import venteReducer from "./venteSlice";

export const store = configureStore({
    reducer: {
        product: productReducer,
        client: clientReducer,
        vente: venteReducer
    }
});