import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { data } from "../../Utils/Data";


export const Datacontext = createContext();


export const DatacontextProvider = ({ children }) => {
    const [ownerid, setownerid] = useState(1);
    const { pathname } = useLocation();
    const [pagedata, setpagedata] = useState([]);

    useEffect(() => {
        if (pathname === "/") {
            let tempdata = data.filter((el) => el.owner_id === ownerid);
            setpagedata(tempdata);
        }
        else if (pathname === "/all") {
            setpagedata(data);
        }
        else if (pathname === "/blocked") {
            let tempdata = data.filter((el) => el.status === "blocked");
            setpagedata(tempdata);
        }
    }, [pathname, ownerid]);

    
    return (
        <Datacontext.Provider value={{ pathname, pagedata, setpagedata, setownerid }}>
            {children}
        </Datacontext.Provider>
    )
}