import React, { useState, useRef, useEffect, useContext } from 'react'
import { Search, ChevronDown, Star, ShoppingCart } from 'lucide-react'
import { products } from '../Data/data'
import ProductCard from '../components/ProductCard';
import ProductContainer from '../components/ProductContainer';
import { ProductContext } from '../context/ProductContext';




const Shop = () => {

    const { products } = useContext(ProductContext);
    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div className="space-y-1 text-white">
                <h1 className="text-4xl font-bold tracking-tight px-1">All Products</h1>
                <p className="text-gray-500 text-sm px-1">{products.length} products found</p>
            </div>

            {/* Filter Bar */}
            <ProductContainer />
        </div>
    )
}

export default Shop