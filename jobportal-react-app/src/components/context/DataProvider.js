import React, { useState } from "react";
import DataContext from "./DataContext.js";

export default function ContextProvider({ children }) {
    let [userId, setUserId] = useState([0]);


    return (
        <DataContext.Provider
            value={{
                userId,
                setUserId

            }}
        >
            {children}
        </DataContext.Provider>
    );
}