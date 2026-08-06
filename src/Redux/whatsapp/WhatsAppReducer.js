const initialState = {
    contacts: [
        {
            infos: {id: '1', nom: 'contact1', tel: '0555'},
            messages: [
                {id: '1', idRecerver: '1', texte: '', lu: 0}
            ]
        }
    ],
    userConnecte: []
}

const WhatsAppReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'connexion':
            return {...state, userConnecte: state.contacts.filter((c) => c.infos.nom == action.payload.nom && c.infos.tel == action.payload.tel)}
        case 'deconnexion':
            return {
                ...state,
                userConnecte: []
            }
        default:
            return state
    }
}

export default WhatsAppReducer;