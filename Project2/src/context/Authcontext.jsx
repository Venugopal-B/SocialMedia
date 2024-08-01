// import { useEffect } from "react";
// import { useState } from "react";
// import { createContext } from "react";
// import axios from "axios";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {

//     const [currentUser, setCurrentUser] = useState(
//         JSON.parse(localStorage.getItem("user")) || null);

//     const login = async (inputs) => {
//         const res = await axios.post("http://localhost:3000/api/auth/login", inputs,
//             { withCredentials: true, }
//         );
//          setCurrentUser(res.data)
//          console.log(res.data)
//     };
  
    
//     useEffect(() => {
//         localStorage.setItem("user", JSON.stringify(currentUser));
//     }, [currentUser])

//     return (
//         <AuthContext.Provider value={{ currentUser, login }}>
//             {children}
//         </AuthContext.Provider>
//     )
// };


import { useEffect, useState, createContext } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:3000/api/auth/login", inputs, {
        withCredentials: true,
      });
      setCurrentUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      console.log(res.data);
    } catch (err) {
      console.error("Login error:", err);
      // Optionally handle error
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:3000/api/auth/logout", {}, {
        withCredentials: true,
      });
      setCurrentUser(null);
      localStorage.removeItem("user");
    } catch (err) {
      console.error("Logout error:", err);
      // Optionally handle error
    }
  };

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
