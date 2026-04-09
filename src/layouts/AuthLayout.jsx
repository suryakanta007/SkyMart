import React from 'react'
import { Outlet, useLocation } from 'react-router'
import { Zap } from 'lucide-react'

const AuthLayout = () => {
    const location = useLocation();
    const isSignup = location.pathname.includes('register');

    if (isSignup) {
        return (
            <div className="min-h-screen bg-dark-bg text-white font-sans flex items-center justify-center p-6 bg-[radial-gradient(circle_at_50%_50%,_#1a1a1a_0%,_#0a0a0a_100%)]">
                <div className="w-full max-w-lg">
                    <Outlet />
                </div>
            </div>
        )
    }

    return (
        <div className="flex  min-h-screen bg-dark-bg text-white font-sans">
            <div className="hidden  lg:flex flex-col flex-1 p-12 justify-between bg-[radial-gradient(circle_at_20%_30%,_#1a1a1a_0%,_#0a0a0a_100%)]">
                <div>
                    <div className="flex items-center gap-2 mb-20">
                        <div className="bg-brand p-2 rounded-full">
                            <Zap className="w-6 h-6 text-black fill-current" />
                        </div>
                        <span className="text-2xl font-bold">SkyMart</span>
                    </div>

                    <div className="max-w-md">
                        <p className="text-brand text-xs font-bold tracking-widest mb-4 uppercase">Welcome back</p>
                        <h1 className="text-6xl font-bold leading-tight mb-6">
                            Shop the future. <br />
                            <span className="text-brand text-6xl">Today.</span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
                        </p>
                    </div>
                </div>

                <div className="flex gap-4">
                    {[
                        { label: 'Products', value: '20K+' },
                        { label: 'Users', value: '50K+' },
                        { label: 'Rating', value: '4.9★' }
                    ].map((stat, i) => (
                        <div key={i} className="flex-1 bg-[#121212]/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                            <p className="text-brand text-2xl font-bold mb-1">{stat.value}</p>
                            <p className="text-gray-500 text-sm uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>


            <div className="flex-1 flex items-center justify-center p-6 lg:p-12">
                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AuthLayout