import React, { Component } from "react";
import Welcome from "./welcome";

class App extends Component
{
    constructor(props)
    {
        super(props)
    }

    render() {
        return (
            <div>
                <Welcome name="John" />
                <Welcome name="Jane" />
                <Welcome name="Alice" />
            </div>
        );
    }
}

export default App;