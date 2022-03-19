import React, { useState } from "react"
import "./Searchbar.css";
import { MdFilterList } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const Searchbar = () => {
    const [searchbar, setsearchbar] = useState(false);
    const [query, setquery] = useState("");

    return (
        <div className="searchBarContainer">
            {searchbar === false && <FaSearch onClick={() => setsearchbar(!searchbar)} />}
            {searchbar === true && <input type="text" placeholder="Search by name" className="searchInput" value={query} onChange={(event) => setquery(event.target.value)} />}
            {searchbar === true && <AiOutlineCloseCircle onClick={() => setsearchbar(!searchbar)} />}
            <button className="filterButton">
                <h4>
                    <span>
                        <MdFilterList className="filterLogo" />
                    </span>
                    &nbsp;
                    Filter
                </h4>
            </button>
        </div>
    )
}