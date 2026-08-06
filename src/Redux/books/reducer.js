const initialState = {
    listeBooks: []
}

const BookReducer = (state = initialState, action) =>
{
    switch (action.type)
    {
        case 'ajouter':
            return ({
                ...state,
                listeBooks: [...state.listeBooks, action.payload]
            });
        default:
            return state;
    }
};

export default BookReducer;