import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    products: [],
    loading: false,
    // currentProduct: null,
    // error: null
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setproductsLoading: (state, action) => {
            state.loading = action.payload;
        },
        loadAllProducts: (state, action) => {
            state.products = action.payload;
            state.loading = false;
            state.status = "succeeded";
        },
        addProduct: (state, action) => {
            state.products.ProductsData.push(action.payload.productData);
        },
        updateProduct: (state, action) => {
            const { _id } = action.payload.productData;
            state.products.ProductsData = state.products.ProductsData.map(item => item._id == _id ? { ...action.payload.productData } : item);
        },
        deleteProduct: (state, action) => {
            state.products.ProductsData = state.products.ProductsData.filter(post => post._id !== action.payload.productId);
        },
    }
});

export const { setproductsLoading, setError, loadAllProducts, addProduct, updateProduct, deleteProduct, setCurrentProduct, clearCurrentProduct } = productSlice.actions;

export default productSlice.reducer;