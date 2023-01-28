import React, { useState } from "react";
import DataContext from "./DataContext.js";

export default function ContextProvider({ children }) {
    let [userData, setUserData] = useState({});


    return (
        <DataContext.Provider
            value={{
                userData,
                setUserData

            }}
        >
            {children}
        </DataContext.Provider>
    );
}