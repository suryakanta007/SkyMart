import { createContext, useState } from "react";


export const AuthContext = createContext(); 7



export const AuthProvider = ({ children }) => {

    const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")) || [])
    const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem("loginUser")) || null);



    return <AuthContext.Provider value={{ users, setUsers, loginUser, setLoginUser }}>{children}</AuthContext.Provider>
}

