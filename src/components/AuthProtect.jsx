

import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router';


const AuthProtect = () => {
    const { loginUser } = useContext(AuthContext);
    if (!loginUser) {
        return <Navigate to="/auth" />
    }
    return <Outlet />
}

export default AuthProtect