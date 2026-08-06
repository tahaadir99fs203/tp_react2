import { ADD_PRODUCT, UPDATE_PRODUCT, DELETE_PRODUCT, CALCULATE_TOTAL, SEARCH_PRODUCT, FILTER_BY_CATEGORY } from "./productActions";

const initialState = {
    products: [],
    filteredProducts: [],
    totalPrice: 0
};


export default function productReducer(state = initialState, action) {
  switch (action.type) {

    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map(p =>
          p.id === action.payload.id ? action.payload : p
        ),
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(p => p.id !== action.payload),
      };

    case CALCULATE_TOTAL:
      return {
        ...state,
        totalPrice: state.products.reduce(
          (sum, p) => sum + p.prix * p.quantite,
          0
        ),
      };

    case SEARCH_PRODUCT:
      return {
        ...state,
        filteredProducts: state.products.filter(p =>
          p.nom.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: state.products.filter(
          p => p.categorie === action.payload
        ),
      };

    default:
      return state;
  }
}