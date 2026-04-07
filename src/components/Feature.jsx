import React from 'react'

const Feature = ({ stat }) => {
    return (
        <div className="bg-[#121212]/50 border border-white/10 p-6 rounded-3xl backdrop-blur-sm flex items-center gap-5 group hover:bg-white/5 transition-all">
            <div className={`w-14 h-14 rounded-2xl bg-${stat.color}/10 flex items-center justify-center border border-${stat.color}/20 group-hover:scale-110 transition-transform`}>
                <stat.icon className={`w-6 h-6 text-brand`} />
            </div>
            <div>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold tracking-tight">{stat.value}</span>
                </div>
                <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
                <p className="text-gray-600 text-xs mt-0.5">{stat.sub}</p>
            </div>
        </div>
    )
}

export default Feature