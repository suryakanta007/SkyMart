import { toast } from "react-toastify";
import axiosInstance from "../config/axios"



export const getAllProducts = async () => {
    try {
        const response = await axiosInstance.get("/products");
        return response.data.products;
    } catch (error) {
        toast.error("Error fetching products");
        console.log("Error fetching products", error);
    }
}

export const getProductById = async (id) => {
    try {
        const response = await axiosInstance.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        toast.error("Error fetching product by id");
        console.log("Error fetching product by id", error);
    }
}

export const getProductsByCategory = async (category) => {
    try {
        const response = await axiosInstance.get(`/products/category/${category}`);
        return response.data.products;
    } catch (error) {
        toast.error("Error fetching products by category");
        console.log("Error fetching products by category", error);
    }
}

export const getProductsBySearch = async (search) => {
    try {
        const response = await axiosInstance.get(`/products/search?q=${search.replace(" ", "%20")}`);
        return response.data.products;
    } catch (error) {
        toast.error("Error fetching products by search");
        console.log("Error fetching products by search", error);
    }
}


export const getProductsCategoriesList = async () => {
    try {
        const response = await axiosInstance.get("/products/category-list");
        return response.data;
    } catch (error) {
        toast.error("Error fetching products categories");
        console.log("Error fetching products categories", error);
    }
}

export const getProductsCategory = async (category) => {
    try {
        const response = await axiosInstance.get(`/products/categories`);
        return response.data;
    } catch (error) {
        toast.error("Error fetching products by category");
        console.log("Error fetching products by category", error);
    }
}