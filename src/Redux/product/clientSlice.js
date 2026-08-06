import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice({
    name: "client",
    initialState: {
        clients: []
    },
    reducers: {
        addClient(state, action) {
            state.clients.push({
                id: Date.now(),
                name: action.payload.name
            });
        },

        deleteClient(state, action) {
            state.clients = state.clients.filter(
                c => c.id !== action.payload
            );
        }
    }
});

export const { addClient, deleteClient } = clientSlice.actions;
export default clientSlice.reducer;