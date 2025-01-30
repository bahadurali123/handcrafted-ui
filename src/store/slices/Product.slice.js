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
        // setError: (state, action) => {
        //     state.error = action.payload;
        // },
        loadAllProducts: (state, action) => {
            state.products = action.payload;
            state.loading = false;
            state.status = "succeeded";
            // state.error = null;
        },
        addProduct: (state, action) => {
            // state.products.push(action.payload);
            console.log("Product data in Slice: ", action.payload);
            state.products.ProductsData.push(action.payload.productData);
        },
        updateProduct: (state, action) => {
            console.log("In Product slice: ", action.payload);
            const { _id } = action.payload.productData;
            state.products.ProductsData = state.products.ProductsData.map(item => item._id == _id ? { ...action.payload.productData } : item);
        },
        deleteProduct: (state, action) => {
            // state.products = state.products.filter(product => product.id !== action.payload);
            state.products.ProductsData = state.products.ProductsData.filter(post => post._id !== action.payload.productId);
        },
        // setCurrentProduct: (state, action) => {
        //     state.currentProduct = action.payload;
        // },
        // clearCurrentProduct: (state) => {
        //     state.currentProduct = null;
        // }
    }
});

// export const { setLoading, setError, loadProducts, addProduct, updateProduct, deleteProduct, setCurrentProduct, clearCurrentProduct } = productSlice.actions;
export const { setproductsLoading, setError, loadAllProducts, addProduct, updateProduct, deleteProduct, setCurrentProduct, clearCurrentProduct } = productSlice.actions;

export default productSlice.reducer;