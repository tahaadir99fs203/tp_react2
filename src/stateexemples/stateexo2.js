import React, { Component } from "react";

class Calcul extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            number1: '',
            number2: '',
            result: ''
        };
    }

    handleSum = () =>{
        const sum = parseFloat(this.state.number1) + parseFloat(this.state.number2);
        this.setState({result: sum});
    }
    handleSoustraction = () =>{
        const soustraction = parseFloat(this.state.number1) - (this.state.number2);
        this.setState({result:soustraction});
    }
    handleInputChange = (e) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    render() {
        return(
            <div>
                <form>
                    <label>Number 1</label>
                    <input
                    type="number"
                    name="number1"
                    value={this.state.number1}
                    onChange={this.handleInputChange}
                    />
                    <button type="button" onClick={this.handleSum}>+</button>
                    <button type="button" onClick={this.handleSoustraction}>-</button>
                    <label>Number 2</label>
                    <input
                    type="number"
                    name="number2"
                    value={this.state.number2}
                    onChange={this.handleInputChange}
                    />
                </form>
                {this.state.result !== '' && (<h2>Resultat: {this.state.result}</h2>)}
            </div>
        );
    }
}
export default Calcul;