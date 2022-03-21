import React, { useContext } from "react";
import "./Cardheader.css";
import { BsFillGridFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Datacontext } from "../Datacontext/Datacontext";

export const Cardheader = () => {
    const { pathname } = useContext(Datacontext);
    return (
        <div className="cardheaderContainer">
            <div className="pagesContainer">
                <h3 className={`${pathname === "/" ? "current" : ""}`}>
                    <Link to={"/"}>
                        Your
                    </Link>
                </h3>
                <h3 className={`${pathname === "/all" ? "current" : ""}`}>
                    <Link to={"/all"}>
                        All
                    </Link>
                </h3>
                <h3 className={`${pathname === "/blocked" ? "current" : ""}`}>
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