export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CALCULATE_TOTAL = "CALCULATE_TOTAL";
export const SEARCH_PRODUCT = "SEARCH_PRODUCT";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});

export const updateProduct = (product) => ({
    type: UPDATE_PRODUCT,
    payload: product,
});

export const deleteProduct = (id) => ({
    type: DELETE_PRODUCT,
    payload: id,
});

export const calculateTotal = () => ({
    type: CALCULATE_TOTAL,
});

export const searchProduct = (name) => ({
    type: UPDATE_PRODUCT,
    payload: name,
});

export const filterByCategory = (category) => ({
    type: FILTER_BY_CATEGORY,
    payload: category,
});