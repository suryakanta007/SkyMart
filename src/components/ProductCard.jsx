import { ShoppingCart, Star } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router'
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    return (<div key={product.id} className="bg-white rounded-[2rem] overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(212,255,0,0.1)] flex flex-col shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">

        <div className="relative aspect-square overflow-hidden bg-gray-100 p-4" onClick={() => navigate(`/products/${product.id}`)}>
            <span className="absolute top-4 left-4 z-10 bg-[#121212] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                {product.category}
            </span>
            <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
            />
        </div>


        <div className="bg-black p-6 flex flex-col flex-1 gap-4">
            <div className="space-y-2 flex-1">
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{product.category}</p>
                <h3 className="text-[#fff] font-bold text-lg leading-tight line-clamp-2">{product.title}</h3>

                <div className="flex items-center gap-1.5">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                            />
                        ))}
                    </div>
                    <span className="text-gray-400 text-xs font-medium">({product.reviews?.length || 0})</span>
                </div>
            </div>

            <div className="flex items-center justify-between pt-2">
                <span className="text-[#fff] text-xl font-black">${product.price}</span>
                <button onClick={() => addToCart(product)} className="bg-brand hover:bg-brand/90 text-black px-4 py-2 rounded-xl flex items-center gap-2 group/btn transition-all active:scale-95 shadow-lg shadow-brand/20">
                    <ShoppingCart className="w-4 h-4" />
                    <span className="text-xs font-bold">Add</span>
                </button>
            </div>
        </div>
    </div>
    )
}

export default ProductCard