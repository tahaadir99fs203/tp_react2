import { createSlice } from "@reduxjs/toolkit";

const venteSlice = createSlice({
    name: "vente",
    initialState: {
        ventes: []
    },
    reducers: {
        addVente(state, action) {
            state.ventes.push({
                id: Date.now(),
                productId: action.payload.productId,
                clientId: action.payload.clientId,
                quantite: action.payload.quantite,
                date: new Date().toLocaleDateString()
            });
        }
    }
});

export const { addVente } = venteSlice.actions;
export default venteSlice.reducer;