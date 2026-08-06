const initialState = {
    products: [
        { id: 1, libelle: 'Produit 1', prix: 10, quantite: 5 },
        { id: 2, libelle: 'Produit 2', prix: 20, quantite: 10 },
    ],
};

const productReducer = (state = initialState, action) =>
{
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case 'UPDATE_PRODUCT':
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id ? action.payload.updatedProduct : product
                ),
            };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter((product) =>
                    product.id !== action.payload
                ),
            };
        default:
            return state;
    }
};

export default productReducer;