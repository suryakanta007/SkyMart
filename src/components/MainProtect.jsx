

import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router';

const MainProtect = () => {
    const { loginUser } = useContext(AuthContext);

    if (loginUser) {
        return <Navigate to="/" />
    }
    return <Outlet />

}

export default MainProtect