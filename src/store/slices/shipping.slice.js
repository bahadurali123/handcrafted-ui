import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    shippings: [],
    loading: false,
};

const shippingSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {
        setShippingLoading: (state, action) => {
            state.loading = action.payload;
        },
        loadAllShippings: (state, action) => {
            state.shippings = action.payload;
            state.status = "succeeded";
            state.loading = false;
        },
        addShipping: (state, action) => {
            state.shippings.ShippingsData.push(action.payload.shippingData);
        },
        updateShipping: (state, action) => {
            state.shippings.ShippingsData = state.shippings.ShippingsData.map(item => item._id == action.payload.shippingData._id ? { ...action.payload.shippingData } : item);
        },
        deleteShipping: (state, action) => {
            state.shippings.ShippingsData = state.shippings.ShippingsData.filter(shipping => shipping._id !== action.payload._id);
        },
    }
});

export const { setShippingLoading, setError, loadAllShippings, addShipping, updateShipping, deleteShipping, setCurrentShipping, clearCurrentShipping } = shippingSlice.actions;

export default shippingSlice.reducer;