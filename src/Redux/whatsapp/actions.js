export const connexion_Action = (nom, tel) => ({
    type: 'connexion',
    payload: {nom, tel}
})

export const deconnexion_Action = () => ({
    type: 'deconnexion'
})