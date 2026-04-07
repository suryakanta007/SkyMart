import React from 'react'
import { Outlet, NavLink } from 'react-router'
import { Zap, ShoppingCart, LogOut } from 'lucide-react'
import Navbar from '../components/Navbar'
import { ProductProvider } from '../context/ProductContext'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-6 py-8">
                <ProductProvider>
                    <Outlet />
                </ProductProvider>
            </main>
        </div>
    )
}

export default MainLayout