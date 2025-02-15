import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    orders: [],
    loading: false,
    entity: null,
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrderLoading: (state, action) => {
            state.loading = action.payload;
        },
        addUserOrder: (state, action) => {
            state.orders = action.payload;
            state.entity = 'user';
            state.status = "succeeded";
        },
        // updateOrderStatus: (state, action) => {
        //     const { id, status } = action.payload;
        //     const order = state.orders.find((order) => order.id === id);
        //     if (order) {
        //         order.status = status;
        //     }
        // },
        // removeOrder: (state, action) => {
        //     state.orders = state.orders.filter((order) => order.id !== action.payload);
        // },
    },
});

export const {
    setOrderLoading,
    setError,
    loadOrders,
    addUserOrder,
    updateOrderStatus,
    removeOrder,
    setCurrentOrder,
    clearCurrentOrder,
} = orderSlice.actions;

export default orderSlice.reducer;
