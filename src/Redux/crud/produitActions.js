export const FETCH_PRODUITS = 'FETCH_PRODUITS';
export const ADD_PRODUIT = 'ADD_PRODUIT';
export const DELETE_PRODUIT = 'DELETE_PRODUIT';
export const UPDATE_PRODUIT = 'UPDATE_PRODUIT';

export const fetchProduits = (produits) => ({
    type: FETCH_PRODUITS,
    payload: produits,
});

export const addProduit = (produit) => ({
    type: ADD_PRODUIT,
    payload: produit,
});

export const deleteProduit = (id) => ({
    type: DELETE_PRODUIT,
    payload: id,
});

export const updateProduit = (id, updatedProduit) => ({
    type: UPDATE_PRODUIT,
    payload: { id, updatedProduit },
});