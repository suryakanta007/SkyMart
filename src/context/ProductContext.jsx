import { Children, createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {


    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All Categories');

    const [loding, setLoding] = useState(false);

    return (
        <ProductContext.Provider value={{ products, setProducts, categories, setCategories, loding, setLoding,selectedCategory,setSelectedCategory }}>
            {children}
        </ProductContext.Provider>
    )
}

