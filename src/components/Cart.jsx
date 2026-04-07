import React from 'react'
import { ShoppingBag, X, Package, ArrowRight, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { isCartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal, cartCount } = useCart();

    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isCartOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                onClick={toggleCart}
            />

            {/* Drawer */}
            <div
                className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#0d0d0d] z-[70] shadow-2xl transform transition-transform duration-500 ease-out flex flex-col border-l border-white/5 ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                {/* Header */}
                <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#0d0d0d]">
                    <div className="flex items-center gap-3">
                        <div className="bg-brand/10 p-2 rounded-xl">
                            <ShoppingBag className="w-5 h-5 text-brand" />
                        </div>
                        <h2 className="text-xl font-bold tracking-tight text-white">Cart</h2>
                        {cartCount > 0 && (
                            <span className="bg-brand text-black text-[10px] font-black px-2 py-0.5 rounded-full">
                                {cartCount}
                            </span>
                        )}
                    </div>
                    <button
                        onClick={toggleCart}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors text-gray-500 hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                    {cartItems.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center space-y-6 text-center animate-in fade-in zoom-in duration-500">
                            <div className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mb-2 border border-white/5">
                                <Package className="w-10 h-10 text-gray-700" />
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-white">Cart is empty</h3>
                                <p className="text-gray-500 text-sm">Go shop something cool!</p>
                            </div>
                            <button
                                onClick={toggleCart}
                                className="bg-brand hover:bg-brand/90 text-black px-8 py-3.5 rounded-2xl font-bold text-sm shadow-lg shadow-brand/20 transition-all active:scale-95 flex items-center gap-2 group"
                            >
                                Browse Products
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex gap-4 group">
                                    <div className="w-20 h-20 bg-white rounded-2xl p-2 flex-shrink-0">
                                        <img
                                            src={item.thumbnail || item.image || (item.images && item.images[0])}
                                            alt={item.title || item.name}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <h4 className="text-sm font-bold text-white truncate pr-4">{item.title || item.name}</h4>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-gray-600 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                            </div>
                                            <p className="text-xs text-gray-500 font-medium capitalize">{item.category}</p>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-brand font-black text-sm">${item.price}</span>
                                            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-2 py-1">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-1 hover:text-brand transition-colors text-gray-500"
                                                >
                                                    <Minus className="w-3 h-3" />
                                                </button>
                                                <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-1 hover:text-brand transition-colors text-gray-500"
                                                >
                                                    <Plus className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {cartItems.length > 0 && (
                    <div className="p-6 border-t border-white/5 space-y-4 bg-[#0d0d0d]">
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-medium">Subtotal</span>
                            <span className="text-2xl font-black text-white">${cartTotal.toFixed(2)}</span>
                        </div>
                        <button className="w-full bg-brand hover:bg-brand/90 text-black py-4 rounded-2xl font-bold text-base shadow-lg shadow-brand/20 transition-all active:scale-95">
                            Checkout now
                        </button>
                        <p className="text-[10px] text-center text-gray-600 font-medium uppercase tracking-widest">
                            Free shipping on orders over $50
                        </p>
                    </div>
                )}
            </div>
        </>
    )
}

export default Cart