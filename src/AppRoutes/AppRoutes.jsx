import { RouterProvider, createBrowserRouter } from "react-router"

import React from 'react'
import AuthLayout from "../layouts/AuthLayout";
import Signin from "../components/Signin";
import Signup from "../components/Signup";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
import AuthProtect from "../components/AuthProtect";
import MainProtect from "../components/MainProtect";
import Home from "../screens/Home";
import About from "../screens/About";
import Shop from "../screens/Shop";
import ProductDetails from "../screens/ProductDetails";

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
                            element: <Home />
                        },
                        {
                            path: "products",
                            element: <Shop />,
                        },
                        {
                            path: "products/:id",
                            element: <ProductDetails />
                        },
                        {
                            path: "about",
                            element: <About />
                        }
                    ]
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default AppRoutes