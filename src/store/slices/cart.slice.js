import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
    totalShipping: 0,
    loading: false,
    error: null
};

console.log("Cart Service!");
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // setLoading: (state, action) => {
        //     state.loading = action.payload;
        // },
        // setError: (state, action) => {
        //     state.error = action.payload;
        // },
        addCartProduct: (state, action) => {
            console.log("Add To Cart Service: ", action.payload);
            const existingProduct = state.cart.find(item => item._id === action.payload.product._id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity;
                existingProduct.totalPrice += action.payload.product.price * action.payload.quantity;
            } else {
                state.cart.push({
                    ...action.payload.product,
                    totalPrice: action.payload.product.price * action.payload.quantity,
                    quantity: action.payload.quantity,
                    shippingFee: action.payload.shippingFee
                });
            }
            state.totalItems += action.payload.quantity;
            state.totalPrice += action.payload.product.price * action.payload.quantity;
            state.totalShipping += action.payload.shippingFee * action.payload.quantity;
        },
        updateProductQuantity: (state, action) => {
            console.log("Cart slice data: ", action.payload);
            const { id, quantity } = action.payload;
            const product = state.cart.find(item => item._id === id);
            if (product) {
                state.totalItems += quantity - product.quantity;
                state.totalPrice += (quantity - product.quantity) * product.price;
                state.totalShipping += (quantity - product.quantity) * product.shippingFee
                product.quantity = quantity;
                product.totalPrice = product.price * quantity;
            }
        },
        removeCartProduct: (state, action) => {
            const product = state.cart.find(item => item._id === action.payload.id);
            if (product) {
                state.totalItems -= product.quantity;
                state.totalPrice -= product.totalPrice;
                state.totalShipping -= product.shippingFee * product.quantity;
                state.cart = state.cart.filter(item => item._id !== action.payload.id);
            }
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalItems = 0;
            state.totalPrice = 0;
            state.totalShipping = 0;
        }
    }
});

export const { setLoading, setError, addCartProduct, updateProductQuantity, removeCartProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;