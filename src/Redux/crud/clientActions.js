export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const ADD_CLIENT = 'ADD_CLIENT';
export const DELETE_CLIENT = 'DELETE_CLIENT';
export const UPDATE_CLIENT = 'UPDATE_CLIENT';

export const fetchClients = (clients) => ({
    type: FETCH_CLIENTS,
    payload: clients,
});

export const addClient = (client) => ({
    type: ADD_CLIENT,
    payload: client,
});

export const deleteClient = (id) => ({
    type: DELETE_CLIENT,
    payload: id,
});

export const updateClient = (id, updatedClient) => ({
    type: UPDATE_CLIENT,
    payload: { id, updatedClient },
});