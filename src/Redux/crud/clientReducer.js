import { FETCH_CLIENTS, ADD_CLIENT, DELETE_CLIENT, UPDATE_CLIENT } from "./clientActions";

const initialState = {
    clients: [],
};

const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CLIENTS:
            return { ...state, clients: action.payload };
        case ADD_CLIENT:
            return { ...state, clients: [...state.clients, action.payload] };
        case DELETE_CLIENT:
            return { ...state, clients: state.clients.filter((client) => client.id !== action.payload) };
        case UPDATE_CLIENT:
            return {
                ...state,
                clients: state.clients.map((client) =>
                    client.id === action.payload.id ? action.payload.updatedClient : client
                ),
            };
        default:
            return state;
    }
};

export default clientReducer;