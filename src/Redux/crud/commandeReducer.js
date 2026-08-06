import { FETCH_COMMANDES, ADD_COMMANDE, DELETE_COMMANDE, UPDATE_COMMANDE } from "./commandeActions";

const initialState = {
    commandes: [],
};

const commandeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMANDES:
      return { ...state, commandes: action.payload };
    case ADD_COMMANDE:
      return { ...state, commandes: [...state.commandes, action.payload] };
    case DELETE_COMMANDE:
      return { ...state, commandes: state.commandes.filter((commande) => commande.id !== action.payload) };
    case UPDATE_COMMANDE:
      return {
        ...state,
        commandes: state.commandes.map((commande) =>
          commande.id === action.payload.id ? action.payload.updatedCommande : commande
        ),
      };
    default:
      return state;
  }
};

export default commandeReducer;