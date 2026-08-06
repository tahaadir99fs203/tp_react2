import React, { Component } from "react";

export default class Cruds extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            listeClients: [],
            keySearch: '',
            update: false,
            client: {
                id: 1,
                fname: '',
                lname: '',
                email: '',
                group: '',
                genre: ''
            },
            firstpage: 1,
            lastPage: 3,
            totalClients: 0
        }
    }

    submitForm = (e) => {
        e.preventDefault()
    }

    getClient = (e) => {
        const {name, value} = e.target
        this.setState((prevState) => ({
            client: { ...prevState.client, [name]: value.toLowerCase()}
        }))
    }
}