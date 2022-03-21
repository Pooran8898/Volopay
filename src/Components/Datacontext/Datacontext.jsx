import React, { createContext } from "react";


export const Datacontext = createContext();


export const DatacontextProvider = ({ children }) => {

    return (
        <Datacontext.Provider value={""}>
            {children}
        </Datacontext.Provider>
    )
}