import React from 'react'
import { ArrowRight, ShoppingCart, TrendingUp, Star, LayoutGrid, Zap, Laptop, Shirt, Sofa, Home as HomeIcon, Trophy, Watch } from 'lucide-react'
import Hero from '../components/Hero'
import { featueredData } from '../Data/data'
import Feature from '../components/Feature'

const Home = () => {
    return (
        <div className="space-y-12 pb-20">

            <Hero />


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featueredData.map((stat, i) => (
                    <Feature key={i} stat={stat} />
                ))}
            </div>


            <section className="space-y-8">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold tracking-tight px-2">Shop by Category</h2>
                    <button className="text-brand text-sm font-bold flex items-center gap-1 hover:underline transition-all">
                        View All <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { name: 'Electronics', count: 17, icon: Laptop },
                        { name: 'Clothing', count: 2, icon: Shirt },
                        { name: 'Furniture', count: 3, icon: Sofa },
                        { name: 'Home', count: 14, icon: HomeIcon },
                        { name: 'Sports', count: 8, icon: Trophy },
                        { name: 'Accessories', count: 6, icon: Watch }
                    ].map((cat, i) => (
                        <div key={i} className="bg-white group cursor-pointer rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,255,0,0.1)]">
                            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                                <cat.icon className="w-12 h-12 text-black opacity-80" />
                            </div>
                            <h3 className="text-black font-bold text-lg mb-1">{cat.name}</h3>
                            <p className="text-gray-400 text-sm font-medium">{cat.count} items</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home