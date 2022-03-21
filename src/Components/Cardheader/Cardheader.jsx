import React from "react";
import "./Cardheader.css";
import { BsFillGridFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const Cardheader = () => {

    return (
        <div className="cardheaderContainer">
            <div className="pagesContainer">
                <h3 className="current">
                    <Link to={"/"}>
                        Your
                    </Link>
                </h3>
                <h3>
                    <Link to={"/all"}>
                        All
                    </Link>
                </h3>
                <h3>
                    <Link to={"/blocked"}>
                        Blocked
                    </Link>
                </h3>
            </div>
            <div className="demoContainer">
                <BsFillGridFill />
                <GiHamburgerMenu />
            </div>
        </div>
    )
}