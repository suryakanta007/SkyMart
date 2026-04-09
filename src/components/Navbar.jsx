import { LogOut, ShoppingCart, Zap } from 'lucide-react'
import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router'
import { useCart } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {

    const { toggleCart, cartCount } = useCart();
    const { setLoginUser, loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogOut = () => {
        setLoginUser(null);
        localStorage.removeItem("loginUser");
    }

    return (
        <nav className="max-w-7xl mx-auto sticky top-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center justify-between">

            <div className="flex items-center gap-2">
                <div className="bg-brand p-1.5 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-black fill-current" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white font-sans">SkyMart</span>
            </div>


            <div className="hidden md:flex items-center gap-8">
                {[
                    { name: 'Home', path: '/' },
                    { name: 'Shop', path: '/products' },
                    { name: 'About', path: '/about' }
                ].map((link) => (
                    <NavLink
                        key={link.name}
                        to={link.path}
                        className={({ isActive }) =>
                            `text-sm font-medium transition-colors hover:text-brand ${isActive ? 'text-brand' : 'text-gray-400'}`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>


            <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="w-6 h-6 bg-brand rounded-full flex items-center justify-center">
                        <span className="text-[10px] font-bold text-black uppercase leading-none">{loginUser.name[0]}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">{loginUser.name}</span>
                </div>

                <div className="flex items-center gap-2">
                    <button onClick={toggleCart} className="p-2 rounded-full hover:bg-white/5 transition-colors border border-white/5">
                        <ShoppingCart className="w-5 h-5 text-gray-400" />
                    </button>
                    <button onClick={handleLogOut} className="p-2 rounded-full hover:bg-white/5 transition-colors border border-white/5">
                        <LogOut className="w-5 h-5 text-gray-400" />
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar