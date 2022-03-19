import React from "react";
import "./Cardheader.css";
import { BsFillGridFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

export const Cardheader = () => {

    return (
        <div className="cardheaderContainer">
            <div className="pagesContainer">
                <h3 className="current">Your</h3>
                <h3>All</h3>
                <h3>Blocked</h3>
            </div>
            <div className="demoContainer">
                <BsFillGridFill />
                <GiHamburgerMenu />
            </div>
        </div>
    )
}