import { ChevronDown, Search } from 'lucide-react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import ProductCard from './ProductCard';
import { ProductContext } from '../context/ProductContext';
import { getAllProducts, getProductsByCategory, getProductsBySearch, getProductsCategoriesList } from '../api/productApi';
import { debounce } from '../utiles/debounce';

const ProductContainer = () => {

    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');
    const [selectedSort, setSelectedSort] = useState('Featured');

    const [searchQuery, setSearchQuery] = useState('');

    const categoryRef = useRef(null);
    const sortRef = useRef(null);

    const { products, setProducts, categories, setCategories } = useContext(ProductContext);

    const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low', 'Rating: High to Low'];

    const searchProducts = async (query) => {
        try {
            const data = await getProductsBySearch(query);
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    }

    const debouncedSearch = debounce(searchProducts, 1000);

    useEffect(() => {
        try {
            const getData = async () => {
                console.log("Fetching products...");
                if (selectedCategory !== "All Categories") {
                    const data = await getProductsByCategory(selectedCategory);
                    setProducts(data);
                    return;
                }
                const data = await getAllProducts();
                setProducts(data);

            }
            getData();

            const getCategories = async () => {
                const data = await getProductsCategoriesList();
                setCategories(["All Categories", ...data]);
            }
            getCategories();




        } catch (error) {
            console.log(error);
        }
    }, [selectedCategory]);


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
        <>
            <div className="bg-[#121212] border border-white/5 rounded-3xl p-3 flex flex-col md:flex-row gap-4 items-center relative z-40">
                <div className="relative flex-1 w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />

                    <input
                        value={searchQuery}
                        onChange={(e) => {

                            setSearchQuery(e.target.value);
                            debouncedSearch(e.target.value);
                        }}
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
                {products.map((product) => {
                    return (<ProductCard key={product.id} product={product} />)
                })}
            </div>
        </>
    )
}

export default ProductContainer