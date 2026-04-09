import React from 'react'
import { ArrowRight, ShoppingCart, TrendingUp, Star, LayoutGrid, Zap, Laptop, Shirt, Sofa, Home as HomeIcon, Trophy, Watch } from 'lucide-react'
import Hero from '../components/Hero'
import { featueredData } from '../Data/data'
import Feature from '../components/Feature'
import CategoryCard from '../components/CategoryCard'

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
                        { name: 'beauty', count: 17, icon: Laptop },
                        { name: 'furniture', count: 2, icon: Shirt },
                        { name: 'tops', count: 3, icon: Sofa },
                        { name: 'groceries', count: 14, icon: HomeIcon },
                        { name: 'motorcycle', count: 8, icon: Trophy },
                    ].map((cat, i) => (
                        <CategoryCard key={i} cat={cat} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home