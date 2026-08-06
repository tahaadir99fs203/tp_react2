export const FETCH_COMMANDES = 'FETCH_COMMANDES';
export const ADD_COMMANDE = 'ADD_COMMANDE';
export const DELETE_COMMANDE = 'DELETE_COMMANDE';
export const UPDATE_COMMANDE = 'UPDATE_COMMANDE';

export const fetchCommandes = (commandes) => ({
    type: FETCH_COMMANDES,
    payload: commandes,
});

export const addCommande = (commande) => ({
    type: ADD_COMMANDE,
    payload: commande,
});

export const deleteCommande = (id) => ({
    type: DELETE_COMMANDE,
    payload: id,
});

export const updateCommande = (id, updatedCommande) => ({
    type: UPDATE_COMMANDE,
    payload: { id, updatedCommande },
});