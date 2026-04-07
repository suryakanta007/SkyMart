import React, { useState, useRef, useEffect } from 'react'
import { Search, ChevronDown, Star, ShoppingCart } from 'lucide-react'
import { products } from '../Data/data'

const categories = ['All Categories', 'Electronics', 'Clothing', 'Furniture', 'Home', 'Food'];
const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating: High to Low'];

const Shop = () => {
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [selectedSort, setSelectedSort] = useState('Featured');

    const categoryRef = useRef(null);
    const sortRef = useRef(null);

    // Close dropdowns on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (categoryRef.current && !categoryRef.current.contains(event.target)) {
                setIsCategoryOpen(false);
            }
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div className="space-y-1 text-white">
                <h1 className="text-4xl font-bold tracking-tight px-1">All Products</h1>
                <p className="text-gray-500 text-sm px-1">50 products found</p>
            </div>

            {/* Filter Bar */}
            <div className="bg-[#121212] border border-white/5 rounded-3xl p-3 flex flex-col md:flex-row gap-4 items-center relative z-40">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-brand/50 transition-colors"
                    />
                </div>

                <div className="flex gap-4 w-full md:w-auto">
                    {/* Category Dropdown */}
                    <div className="relative flex-1 md:flex-none" ref={categoryRef}>
                        <button
                            onClick={() => {
                                setIsCategoryOpen(!isCategoryOpen);
                                setIsSortOpen(false);
                            }}
                            className="w-full md:w-auto flex items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-2xl py-3 px-6 text-sm text-white hover:bg-white/10 transition-colors"
                        >
                            <span className="text-gray-300">{selectedCategory}</span>
                            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isCategoryOpen && (
                            <div className="absolute top-full left-0 mt-2 w-full md:w-64 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {categories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => {
                                            setSelectedCategory(cat);
                                            setIsCategoryOpen(false);
                                        }}
                                        className={`w-full text-left px-5 py-3 text-sm transition-colors ${selectedCategory === cat ? 'text-brand bg-brand/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="relative flex-1 md:flex-none" ref={sortRef}>
                        <button
                            onClick={() => {
                                setIsSortOpen(!isSortOpen);
                                setIsCategoryOpen(false);
                            }}
                            className="w-full md:w-auto flex items-center justify-between gap-8 bg-white/5 border border-white/10 rounded-2xl py-3 px-6 text-sm text-white hover:bg-white/10 transition-colors"
                        >
                            <span className="text-gray-300">{selectedSort}</span>
                            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isSortOpen && (
                            <div className="absolute top-full right-0 mt-2 w-full md:w-64 bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl py-2 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {sortOptions.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => {
                                            setSelectedSort(opt);
                                            setIsSortOpen(false);
                                        }}
                                        className={`w-full text-left px-5 py-3 text-sm transition-colors ${selectedSort === opt ? 'text-brand bg-brand/5' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {opt}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="bg-white rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(212,255,0,0.1)] flex flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
                        {/* Image Container */}
                        <div className="relative aspect-square overflow-hidden bg-gray-100 p-4">
                            <span className="absolute top-4 left-4 z-10 bg-[#121212] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                                {product.category}
                            </span>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>

                        {/* Content */}
                        <div className="bg-black p-6 flex flex-col flex-1 gap-4">
                            <div className="space-y-2 flex-1">
                                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{product.category}</p>
                                <h3 className="text-[#fff] font-bold text-lg leading-tight line-clamp-2">{product.name}</h3>

                                <div className="flex items-center gap-1.5">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-400 text-xs font-medium">({product.reviews})</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between pt-2">
                                <span className="text-[#121212] text-xl font-black">${product.price}</span>
                                <button className="bg-brand hover:bg-brand/90 text-black px-4 py-2 rounded-xl flex items-center gap-2 group/btn transition-all active:scale-95 shadow-lg shadow-brand/20">
                                    <ShoppingCart className="w-4 h-4" />
                                    <span className="text-xs font-bold">Add</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop