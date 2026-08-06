import React, { Component } from "react";
import { FaUser, FaUsers, FaStore, FaTv } from "react-icons/fa";

class LeftSide extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            shortcuts: [
                { id: 1, label: "Mon Profil", icon: <FaUser /> },
                { id: 2, label: "Groupes", icon: <FaUsers /> },
                { id: 3, label: "Marketplace", icon: <FaStore /> },
                { id: 4, label: "Watch", icon: <FaTv /> },
            ],
        };
    }

    render() {
        return(
            <div className="leftside">
                <h3>Raccourcis</h3>
                <ul>
                    {this.state.shortcuts.map((s) => (
                        <li key={s.id}>
                            {s.icon} <span>{s.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default LeftSide;