import { Children, createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {


    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const [loding, setLoding] = useState(false);

    return (
        <ProductContext.Provider value={{ products, setProducts, categories, setCategories, loding, setLoding }}>
            {children}
        </ProductContext.Provider>
    )
}

