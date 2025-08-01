import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";


export const DarkmodeContext = createContext();

export const DarkmodeContextProvider = ({ children }) => {

    const [darkMode, setdarkmode] = useState(
        JSON.parse(localStorage.getItem("darkMode")) || false);

    const toggle = () => {
        setdarkmode(!darkMode)
    }
    useEffect(() => {
        localStorage.setItem("darkMode", darkMode)
    }, [darkMode])

    return (
        <DarkmodeContext.Provider value={{ darkMode, toggle }}>
            {children}
        </DarkmodeContext.Provider>
    )
};