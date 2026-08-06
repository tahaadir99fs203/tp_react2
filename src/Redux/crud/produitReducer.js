import { FETCH_PRODUITS, ADD_PRODUIT, DELETE_PRODUIT, UPDATE_PRODUIT } from "./produitActions";

const initialState = {
    produits: [],
};

const produitReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUITS:
            return { ...state, produits: action.payload };
        case ADD_PRODUIT:
            return { ...state, produits: [...state.produits, action.payload] };
        case DELETE_PRODUIT:
            return { ...state, produits: state.produits.filter((produit) => produit.id !== action.payload) };
        case UPDATE_PRODUIT:
            return {
                ...state,
                produits: state.produits.map((produit) =>
                    produit.id === action.payload.id ? action.payload.updatedProduit : produit
                ),
            };
        default:
            return state;
    }
};

export default produitReducer;