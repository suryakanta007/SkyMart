import React from 'react'
import { Outlet, NavLink } from 'react-router'
import { Zap, ShoppingCart, LogOut } from 'lucide-react'
import Navbar from '../components/Navbar'
import { ProductProvider } from '../context/ProductContext'
import { CartProvider } from '../context/CartContext'
import Cart from '../components/Cart'

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-dark-bg text-white font-sans">

            <main className="max-w-7xl mx-auto px-6 py-8">
                <CartProvider>
                    <ProductProvider>
                        <Navbar />
                        <Cart />
                        <Outlet />
                    </ProductProvider>
                </CartProvider>
            </main>
        </div>
    )
}

export default MainLayout