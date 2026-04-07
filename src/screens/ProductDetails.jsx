import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router'
import {
    ChevronLeft,
    ChevronRight,
    Star,
    ShoppingCart,
    Heart,
    Truck,
    ShieldCheck,
    RotateCcw
} from 'lucide-react'

import { getProductById } from '../api/productApi'
import { ProductDetailSkeliton } from '../components/Skeliton'


const productData = {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 10.48,
    "rating": 2.56,
    "stock": 99,
    "tags": ["beauty", "mascara"],
    "brand": "Essence",
    "sku": "BEA-ESS-ESS-001",
    "weight": 4,
    "dimensions": {
        "width": 15.14,
        "height": 13.08,
        "depth": 22.99
    },
    "warrantyInformation": "1 week warranty",
    "shippingInformation": "Ships in 3-5 business days",
    "availabilityStatus": "In Stock",
    "reviews": [
        { "rating": 3, "comment": "Would not recommend!", "date": "2025-04-30T09:41:02.053Z", "reviewerName": "Eleanor Collins", "reviewerEmail": "eleanor.collins@x.dummyjson.com" },
        { "rating": 4, "comment": "Very satisfied!", "date": "2025-04-30T09:41:02.053Z", "reviewerName": "Lucas Gordon", "reviewerEmail": "lucas.gordon@x.dummyjson.com" },
        { "rating": 5, "comment": "Highly impressed!", "date": "2025-04-30T09:41:02.053Z", "reviewerName": "Eleanor Collins", "reviewerEmail": "eleanor.collins@x.dummyjson.com" }
    ],
    "returnPolicy": "No return policy",
    "minimumOrderQuantity": 48,
    "meta": {
        "createdAt": "2025-04-30T09:41:02.053Z",
        "updatedAt": "2025-04-30T09:41:02.053Z",
        "barcode": "5784719087687",
        "qrCode": "https://cdn.dummyjson.com/public/qr-code.png"
    },
    "images": [
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
    ],
    "thumbnail": "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
}




const ProductDetails = () => {
    const { id } = useParams();
    const [prdId, setPrdId] = useState(Number(id));

    const [product, setProduct] = useState(productData);
    const [like, setLike] = useState(false);
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();


    const handleNext = () => {
        setPrdId((prev) => prev + 1);
        navigate(`/products/${prdId + 1}`);
    }

    const handlePrev = () => {
        setPrdId((prev) => prev - 1);
        navigate(`/products/${prdId - 1}`);
    }

    const getProduct = async () => {
        setLoading(true);
        const data = await getProductById(prdId);
        setProduct(data);
        setLoading(false);
    }

    useEffect(() => {
        getProduct();
    }, [id])

    if (loading) {
        return <ProductDetailSkeliton />
    }

    return (


        <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 text-white">

            <nav className="flex items-center gap-2 text-sm text-gray-500 font-medium tracking-tight">
                <Link to="/products" className="flex items-center gap-1 hover:text-white transition-colors">
                    <ChevronLeft className="w-4 h-4" /> Products
                </Link>
                <span>/</span>
                <span className="capitalize">{product?.category}</span>
                <span>/</span>
                <span className="text-gray-300">{product?.title}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                <div className="bg-white rounded-[2.5rem] p-8 aspect-square flex items-center justify-center overflow-hidden shadow-2xl">
                    <img
                        src={product?.images[0]}
                        alt={product?.title}
                        className="w-full h-full object-contain transform hover:scale-110 transition-transform duration-700"
                    />
                </div>


                <div className="flex flex-col gap-8 py-4">
                    <div className="space-y-4">
                        <span className="inline-block bg-[#1a2e05] text-brand text-[10px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border border-brand/20">
                            {product?.category}
                        </span>

                        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                            {product?.title}
                        </h1>

                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${i < Math.floor(product?.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-600 text-gray-600'}`}
                                    />
                                ))}
                                <span className="ml-2 text-lg font-bold">{product?.rating}</span>
                            </div>
                            <span className="text-gray-500 font-medium">({product?.reviews?.length} reviews)</span>
                        </div>
                    </div>

                    <div className="h-px bg-white/10 w-full" />

                    <div className="space-y-6">
                        <div className="text-5xl font-black text-brand tracking-tighter">
                            ${product?.price}
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                            {product?.description}
                        </p>
                    </div>

                    <div className="flex gap-4">
                        <button className="flex-1 bg-brand hover:bg-brand/90 text-black py-5 rounded-[1.25rem] flex items-center justify-center gap-3 font-bold text-lg shadow-lg shadow-brand/20 transition-all active:scale-95">
                            <ShoppingCart className="w-5 h-5" />
                            Add to Cart
                        </button>
                        <button className="w-16 h-16 rounded-[1.25rem] border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors group">
                            <Heart className={`w-6 h-6 ${like ? "text-red-500 bg-red-500/10" : "text-gray-400"}  transition-colors`} onClick={() => like ? setLike(false) : setLike(true)} />
                        </button>
                    </div>


                    <div className="grid grid-cols-3 gap-3">
                        <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-3 text-center group hover:border-brand/20 transition-colors">
                            <Truck className="w-6 h-6 text-brand" />
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-wider">Free Delivery</p>
                                <p className="text-[9px] text-gray-500 font-medium">On orders $50+</p>
                            </div>
                        </div>
                        <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-3 text-center group hover:border-brand/20 transition-colors">
                            <ShieldCheck className="w-6 h-6 text-brand" />
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-wider">Secure Pay</p>
                                <p className="text-[9px] text-gray-500 font-medium">256-bit SSL</p>
                            </div>
                        </div>
                        <div className="bg-[#121212] border border-white/5 rounded-2xl p-4 flex flex-col items-center gap-3 text-center group hover:border-brand/20 transition-colors">
                            <RotateCcw className="w-6 h-6 text-brand" />
                            <div className="space-y-1">
                                <p className="text-[10px] font-bold uppercase tracking-wider">Easy Returns</p>
                                <p className="text-[9px] text-gray-500 font-medium">30-day policy</p>
                            </div>
                        </div>
                    </div>


                    <div className="flex gap-4 pt-4">
                        <button onClick={handlePrev} className="flex-1 bg-white/5 border border-white/10 rounded-2xl py-4 flex items-center justify-center gap-2 text-sm font-bold hover:bg-white/10 transition-colors group">
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Previous
                        </button>
                        <button onClick={handleNext} className="flex-1 bg-brand text-black rounded-2xl py-4 flex items-center justify-center gap-2 text-sm font-bold shadow-lg shadow-brand/20 hover:bg-brand/90 transition-all active:scale-95 group">
                            Next
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ProductDetails