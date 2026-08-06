import React, { Component } from "react";
import { FaAd, FaUserCircle } from "react-icons/fa";
import ad1 from "c:/Users/pc/tp_react/src/assets/ads/iPhone-17-Pro-Max-release-date-price-and-features.jpg";
import ad2 from "c:/Users/pc/tp_react/src/assets/ads/1_MF5V_dkybUTcfzwHFh0VSw.jpg";
import Anniversaires from "./anniversaires";

class RightSide extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            ads: [
                { id: 1, title: "iPhone 17", image: ad1 },
                { id: 2, title: "Cours ReactJS", image: ad2}
            ],
            contacts: ["David", "Emma", "Fatima", "George"],
        };
    }

    render() {
        return(
            <div className="rightside">
                <h3><FaAd /> Publicites</h3>
                {this.state.ads.map((ad) => ( 
                    <div key={ad.id} className="ad-box">
                        <img src={ad.image} alt={ad.title} className="ad-image" />
                        <p>{ad.title}</p>
                    </div>
                ))}
                <Anniversaires />

                <h3><FaUserCircle /> Contacts</h3>
                <ul>
                    {this.state.contacts.map((c, index) => (
                        <li key={index}>{c}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default RightSide;