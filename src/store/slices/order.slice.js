import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    orders: [],
    loading: false,
    // currentOrder: null,
    // error: null,
    entity: null,
};

const orderSlice = createSlice({
    name: "orders",
    initialState,
    reducers: {
        setOrderLoading: (state, action) => {
            state.loading = action.payload;
        },
        // setError: (state, action) => {
        //     state.error = action.payload;
        // },
        // loadOrders: (state, action) => {
        //     state.orders = action.payload;
        //     state.loading = false;
        //     state.error = null;
        // },
        addUserOrder: (state, action) => {
            // state.orders.push(action.payload);
            // const { name, ordersData } = action.payload;
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
        // setCurrentOrder: (state, action) => {
        //     state.currentOrder = action.payload;
        // },
        // clearCurrentOrder: (state) => {
        //     state.currentOrder = null;
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
