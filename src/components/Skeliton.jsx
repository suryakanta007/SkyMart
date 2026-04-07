import React from 'react'

const ProductSkeleton = () => {
    return (
        <div className="bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.1)] animate-pulse">

            <div className="relative aspect-square bg-gray-200 p-4">
                <div className="absolute top-4 left-4 w-16 h-5 bg-gray-300 rounded-full"></div>
                <div className="w-full h-full bg-gray-300 rounded-2xl"></div>
            </div>


            <div className="bg-white p-6 flex flex-col flex-1 gap-4">
                <div className="space-y-3 flex-1">

                    <div className="w-20 h-2 bg-gray-200 rounded-full"></div>


                    <div className="space-y-2">
                        <div className="w-full h-4 bg-gray-200 rounded-full"></div>
                        <div className="w-3/4 h-4 bg-gray-200 rounded-full"></div>
                    </div>

                    <div className="flex items-center gap-2">
                        <div className="w-24 h-3 bg-gray-200 rounded-full"></div>
                        <div className="w-8 h-3 bg-gray-200 rounded-full"></div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                    <div className="w-16 h-6 bg-gray-200 rounded-full"></div>
                    <div className="w-20 h-9 bg-gray-200 rounded-xl"></div>
                </div>
            </div>
        </div>
    )
}

export const Skeliton = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
            {[...Array(10)].map((_, i) => (
                <ProductSkeleton key={i} />
            ))}
        </div>
    )
}

export const ProductDetailSkeliton = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 animate-pulse">

            <div className="flex items-center gap-2">
                <div className="w-20 h-4 bg-white/5 rounded-full"></div>
                <div className="w-4 h-4 bg-white/5 rounded-full"></div>
                <div className="w-16 h-4 bg-white/5 rounded-full"></div>
                <div className="w-4 h-4 bg-white/5 rounded-full"></div>
                <div className="w-32 h-4 bg-white/5 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div className="bg-white rounded-[2.5rem] p-8 aspect-square flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gray-200 rounded-2xl"></div>
                </div>


                <div className="flex flex-col gap-8 py-4">
                    <div className="space-y-4">
                        <div className="w-24 h-8 bg-white/5 rounded-full border border-white/5"></div>
                        <div className="space-y-2">
                            <div className="w-full h-12 bg-white/5 rounded-2xl"></div>
                            <div className="w-3/4 h-12 bg-white/5 rounded-2xl"></div>
                        </div>
                        <div className="flex items-center gap-4 pt-2">
                            <div className="w-32 h-4 bg-white/5 rounded-full"></div>
                            <div className="w-24 h-4 bg-white/5 rounded-full"></div>
                        </div>
                    </div>

                    <div className="h-px bg-white/10 w-full" />

                    <div className="space-y-6">
                        <div className="w-40 h-12 bg-brand/20 rounded-2xl"></div>
                        <div className="space-y-3">
                            <div className="w-full h-4 bg-white/5 rounded-full"></div>
                            <div className="w-full h-4 bg-white/5 rounded-full"></div>
                            <div className="w-3/4 h-4 bg-white/5 rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1 h-16 bg-brand/30 rounded-[1.25rem]"></div>
                        <div className="w-16 h-16 bg-white/5 rounded-[1.25rem] border border-white/10"></div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-24 bg-white/5 rounded-2xl border border-white/5"></div>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-4">
                        <div className="flex-1 h-14 bg-white/5 rounded-2xl border border-white/5"></div>
                        <div className="flex-1 h-14 bg-brand/20 rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSkeleton