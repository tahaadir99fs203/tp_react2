import React, { Component } from "react";
import "./bootstrap-5.0.2-dist/css/bootstrap.min.css";

export default class Cruds extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listClients: [],
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
        e.preventDefault();
    }

    getClient = (e) => {
        const { name, value } = e.target
        this.setState((prevState) => ({
            client: { ...prevState.client, [name]: value.toLowerCase() }
        }))
    }

    AjouterClient = () => {
        const { client, totalClients, lastPage } = this.state
        this.setState((prevState) => ({
            listClients: [...prevState.listClients, prevState.client]
        }))
        this.setState(prevState => ({
            client: {
                id: prevState.client.id + 1,
                fname: '',
                lname: '',
                email: '',
                group: '',
                genre: ''
            }
        }))

        if (totalClients >= lastPage) {
            this.setState(prevState => ({
                totalClients: prevState.totalClients + 1,
            }))
        }
    }

    updateClient = (cli) => {
        this.setState(prevState => ({
            client: cli,
            update: true
        }))
    }

    confirmUpdated = () => {
        const newlist = this.state.listClients.map(client => {
            if (this.state.client.id === client.id) {
                return this.state.client
            } else {
                return client
            }
        })
        this.setState(prevState => ({
            listClients: newlist,
            client: {
                id: newlist.length + 1,
                fname: '',
                lname: '',
                email: '',
                group: '',
                genre: ''
            },
            update: false,
        }))
    }

    deleteClient = (Cli) => {
        const { listClients, firstpage, totalClients } = this.state
        const newlist = listClients.filter(client => client.id !== Cli.id);
        
        this.setState(prevState => ({
            listClients: newlist,
        }))

        if (totalClients <= firstpage && firstpage > 1) {
            this.setState(prevState => ({
                lastPage: prevState.lastPage - 3,
                firstpage: prevState.firstpage - 3
            }))
        }
    }

    getKeySearch = (event) => {
        this.setState(prevState => ({
            keySearch: event.target.value.toLowerCase()
        }))
    }

    cancel = () => {
        if (this.state.update) {
            this.setState(prevState => ({
                client: {
                    id: prevState.listClients.length + 1,
                    fname: '',
                    lname: '',
                    email: '',
                    group: '',
                    genre: ''
                },
                update: false
            }))
        } else {

        }
    }
    updateTotalClient = (total) => {
        this.setState(prevState => { prevState.totalClients = total })
    }

    displayClient = () => {
        const { listClients, keySearch } = this.state

        if (listClients.length === 0) {
            return (
                <tr>
                    <td colSpan={7}>
                        <p className="alert alert-warning text-center m-0">Aucun client</p>
                    </td>
                </tr>
            )
        }

        const filteredClients = listClients.filter(client => {
            if (keySearch === '') {
                return true;
            }
            return (
                client.id.toString() === keySearch ||
                client.fname.includes(keySearch) ||
                client.lname.includes(keySearch) ||
                client.genre.includes(keySearch) ||
                client.group.includes(keySearch)
            );
        });

        this.updateTotalClient(filteredClients.length)

        return (
            filteredClients.length > 0 ? (
                filteredClients.map((client, index) => {
                    if (this.state.lastPage > index && this.state.firstpage <= index + 1) {
                        return (
                            <tr key={client.id}>
                                <td>{client.id}</td>
                                <td>{client.fname}</td>
                                <td>{client.lname}</td>
                                <td>{client.email}</td>
                                <td>{client.group}</td>
                                <td>{client.genre}</td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <button onClick={() => { this.updateClient(client) }} className="btn btn-primary btn-sm mx-2">Mettre a jour</button>
                                        <button onClick={() => { this.deleteClient(client) }} className="btn btn-danger btn-sm">Supprimer Client</button>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                })
            ) : (
                <tr>
                    <td colSpan={7}>
                        <p className="alert alert-warning text-center m-0">Aucun client correspondant</p>
                    </td>
                </tr>
            )
        )
    }

    paginationNextPrev(param, pageN = 0) {
        if (param === "next") {
            this.setState(prevState => ({
                lastPage: prevState.lastPage + 3,
                firstpage: prevState.firstpage + 3
            }))
        } else if ('prev') {
            this.setState(prevState => ({
                lastPage: prevState.lastPage - 3,
                firstpage: prevState.firstpage - 3
            }))
        }

        if (param === "sp") {
            this.setState(prevState => ({
                lastPage: (3*pageN)+3,
                firstpage: (3*pageN)+1
            }))
        }
    }

    pagination() {
        if (this.state.listClients.length > 3) {
            const { totalClients } = this.state
            return (
                <>
                    <nav aria-label="Page navigation example" className="w-100 text-center">
                        <div className="pagination btn-group w-50 mx-auto">
                            {this.state.firstpage > 3 ? (
                                <button className="btn btn-info btn-sm" onClick={(e) => { this.paginationNextPrev("prev") }}>
                                    <i className="fa-solid fa-angles-left fa-rotate-by"></i>
                                </button>
                            ) : ""}

                            {this.state.listClients.map((p, index) => {
                                if (index % 3 === 0) {
                                    return (
                                        <button className="btn btn-info btn-sm" onClick={(e) => { this.paginationNextPrev("sp", index/3) }}>
                                            {index/3>0?index/3+1:1}
                                        </button>
                                    )
                                }
                            })}

                            {totalClients > this.state.lastPage ? (
                                <button className="btn btn-info btn-sm" onClick={(e) => { this.paginationNextPrev("next") }}>
                                    <i className="fa-solid fa-angles-right fa-rotate-by"></i>
                                </button>
                            ) : ""}
                        </div>
                    </nav>
                </>
            )
        }
    }

    render() {
        return <>
            <div className="container mt-3">
                <div className="mb-2 col">
                    
                    <h2 className="alert alert-success alert-sm w-75 mx-auto text-center">Ajouter Nouveaux Client</h2>
                    <form action="" onSubmit={this.submitForm} className="alert alert-info" method="POST">
                        <div className="row">
                            <div className="row col">
                                <div className="form-group col">
                                    <input type="text" className="form-control" name="lname" placeholder="Nom..." value={this.state.client.lname} onChange={(event) => { this.getClient(event) }} />
                                </div>

                                <div className="form-group col">
                                    <input type="text" className="form-control" name="fname" placeholder="prenom..." value={this.state.client.fname} onChange={(event) => { this.getClient(event) }} />
                                </div>
                            </div>
                            <div className="row col">
                                <div className="form-group col">
                                    <input type="email" className="form-control" name="email" value={this.state.client.email} placeholder="email..." onChange={(event) => { this.getClient(event) }} />
                                </div>
                                <div className="form-group col">
                                    <select name="group" className="form-select" onChange={(event) => { this.getClient(event) }} value={this.state.client.group}>
                                        <option value="">Groups</option>
                                        <option value="dev-200">DEV-200</option>
                                        <option value="dev-201">DEV-201</option>
                                        <option value="dev-202">DEV-202</option>
                                        <option value="dev-203">DEV-203</option>
                                        <option value="dev-204">DEV-204</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row col">
                                <label htmlFor="" className="form-check-label col-3 bg-white mx-3 py-1 rounded border border-1">Genre</label>

                                <div className="col d-flex justify-content-between align-items-center col">
                                    <label htmlFor="F">Femme:</label>
                                    <input 
                                    type="radio" name="genre" className="form-check-input" onChange={(event) => { this.getClient(event) }} checked={this.state.client.genre === 'femme'} value={'Femme'} />

                                    <label htmlFor="H">Homme:</label>
                                    <input
                                    type="radio" name="genre" className="form-check-input" checked={this.state.client.genre === 'homme'} onChange={(event) => { this.getClient(event) }} value={"Homme"} />
                                </div>
                            </div>
                        </div>

                        <div className="form-group d-flex justify-content-between w-50 mx-auto mt-3">
                            {!this.state.update ? (
                                <button className="btn btn-primary mx-2" type="submit" onClick={() => { this.AjouterClient() }}>Ajouter</button>
                            ) : (
                                <button className="btn btn-primary mx-2" type="button" onClick={() => { this.confirmUpdated() }}>Confirmer</button>
                            )}

                            <button type="reset" className="btn btn-danger" onClick={() => { this.cancel() }}>Annuler</button>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <form action="" className="mb-2" onSubmit={(event) => { event.preventDefault() }}>
                        <div className="form-group alert alert-primary">
                            <input
                            type="search" onChange={(event) => { this.getKeySearch(event) }} className="form-control w-50 mx-auto" placeholder="search..." />
                        </div>

                    </form>
                    <table className="table table-bordered table-striped table-hover table-sm">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>First Name</th>
                                <th>Email</th>
                                <th>Group</th>
                                <th>Genre</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayClient()}
                        </tbody>
                    </table>
                    {this.pagination()}
                </div>
            </div>
        </>
    }
}