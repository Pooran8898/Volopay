import React from "react";
import "./Navbar.css";
import { AiOutlinePlus } from "react-icons/ai";

export const Navbar = () => {
    return (
        <nav className="navbarContainer">
            <div className="headlineContainer">
                <h1 className="headline">Virtual Cards</h1>
            </div>
            <div className="navButtonContainer">
                <button className="navButton">
                    <h3><span><AiOutlinePlus className="plusLogo" /></span> &nbsp; &nbsp;Virtual card</h3>
                </button>
            </div>
        </nav>
    )
}