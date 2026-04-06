import { RouterProvider, createBrowserRouter } from "react-router"

import React from 'react'
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import AuthProtect from "../components/AuthProtect";
import MainProtect from "../components/MainProtect";

const AppRoutes = () => {

    const router = createBrowserRouter([
        {
            path: "/auth",
            element: <MainProtect />,
            children: [
                {
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <Signin />
                        },
                        {
                            path: "register",
                            element: <Signup />
                        }
                    ]
                }
            ]
        },
        {
            path: "/",
            element: <AuthProtect />,
            children: [
                {
                    element: <MainLayout />,
                    children: [
                        {
                            path: "",
                            element: <App />
                        }
                    ]
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default AppRoutes