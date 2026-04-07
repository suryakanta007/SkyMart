import { ArrowRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-[#0c0c0c] border border-white/5 rounded-[2.5rem] p-8 md:p-12 lg:p-16">

            <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #333 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center justify-between">
                <div className="max-w-2xl space-y-8 text-center lg:text-left">
                    <div className="space-y-4">
                        <p className="text-brand text-xs font-bold tracking-widest uppercase flex items-center gap-2 justify-center lg:justify-start">
                            Good Morning 👋
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
                            Welcome back, <br />
                            <span className="text-brand">Suryakanta!</span>
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl">
                            Discover today's picks — hand-curated products across electronics, fashion, and more.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button className="bg-brand hover:bg-brand/90 text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(212,255,0,0.2)]">
                            Shop Now <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-2xl font-bold transition-all backdrop-blur-sm">
                            View All Products
                        </button>
                    </div>
                </div>


                <div className="flex flex-col gap-4 w-full max-w-[280px]">
                    <div className="bg-brand/10 border border-brand/20 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center text-center">
                        <span className="text-4xl font-bold text-brand mb-2">20+</span>
                        <span className="text-gray-400 text-sm font-medium">Products Available</span>
                    </div>
                    <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl flex flex-col items-center text-center">
                        <span className="text-3xl font-bold text-white mb-2">Free</span>
                        <span className="text-gray-400 text-sm font-medium">Delivery on ₹999+</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero