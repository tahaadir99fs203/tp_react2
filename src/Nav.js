import React, { Component } from "react";
import { FaHome, FaVideo, FaStore, FaUsers, FaBell, FaUserCircle, FaBars, FaFacebook } from "react-icons/fa";

class Nav extends Component
{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const navlinks = [
            { id: 1, label: "Accueil", icon: <FaHome /> },
            { id: 2, label: "Watch", icon: <FaVideo /> },
            { id: 3, label: "Marketplace", icon: <FaStore />},
            { id: 4, label: "Groupes", icon: <FaUsers /> },
        ];

        return(
            <div className="navbar">
                <div className="navbar-inner">
                    <div className="navbar-left">
                        <FaFacebook className="fb-logo" />
                        <input
                        type="text"
                        className="searchbar"
                        placeholder="Search Facebook"
                        />
                    </div>

                    <div className="navbar-center">
                        {navlinks.map((link) => (
                            <div key={link.id} className="navbar-icon">
                                {link.icon}
                            </div>
                        ))}
                    </div>

                    <div className="navbar-right">
                        <FaUserCircle className="navbar-icon" />
                        <FaBell className="navbar-icon" />
                        <FaBars className="navbar-icon" />
                    </div>
                </div>
            </div>
        );
    }
}

export default Nav;