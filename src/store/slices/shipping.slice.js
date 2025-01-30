import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    shippings: [],
    loading: false,
    // currentShipping: null,
    // error: null
};

const shippingSlice = createSlice({
    name: "shipping",
    initialState,
    reducers: {
        setShippingLoading: (state, action) => {
            state.loading = action.payload;
        },
        // setError: (state, action) => {
        //     state.error = action.payload;
        // },
        loadAllShippings: (state, action) => {
            state.shippings = action.payload;
            state.status = "succeeded";
            state.loading = false;
            // state.error = null;
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
        // setCurrentShipping: (state, action) => {
        //     state.currentShipping = action.payload;
        // },
        // clearCurrentShipping: (state) => {
        //     state.currentShipping = null;
        // }
    }
});

// export const { setLoading, setError, loadShippings, addShipping, updateShipping, deleteShipping, setCurrentShipping, clearCurrentShipping } = shippingSlice.actions;
export const { setShippingLoading, setError, loadAllShippings, addShipping, updateShipping, deleteShipping, setCurrentShipping, clearCurrentShipping } = shippingSlice.actions;

export default shippingSlice.reducer;