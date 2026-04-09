import React, { useContext } from 'react'
import { getProductsByCategory } from '../api/productApi'
import { useNavigate } from 'react-router'
import { ProductContext } from '../context/ProductContext';

const CategoryCard = ({cat}) => {

    const navigate = useNavigate();

    const { setSelectedCategory} = useContext(ProductContext)

    const handleClick =  (name) => {
        setSelectedCategory(name)
        navigate("/products");
      }

  return (
    <div onClick={()=>handleClick(cat.name)} className="bg-white group cursor-pointer rounded-[2rem] p-8 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(212,255,0,0.1)]">
                            <div className="mb-6 transform transition-transform group-hover:scale-110 duration-300">
                                <cat.icon className="w-12 h-12 text-black opacity-80" />
                            </div>
                            <h3 className="text-black font-bold text-lg mb-1">{cat.name}</h3>
                            <p className="text-gray-400 text-sm font-medium">{cat.count} items</p>
                        </div>
  )
}

export default CategoryCard