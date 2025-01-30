import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // data: {}, // Stores all entities, e.g., { products: [...], orders: [...] }
    entity: null, // Name of the entity being filtered, e.g., "products"
    status: false, // Filter status: true if a filter is active
    filteredData: [], // Filtered results for the active entity
    // filtered: {
    //     entity: null, // Name of the entity being filtered, e.g., "products"
    //     status: false, // Filter status: true if a filter is active
    //     data: [], // Filtered results for the active entity
    // },
};

const filterSlice = createSlice({
    name: "filters",
    // name: "data",
    initialState,
    reducers: {
        // setData(state, action) {
        //     const { entity, items } = action.payload;
        //     state.data[entity] = items; // Set data for a specific entity type
        // },
        setFiltered(state, action) {
            const { name, filteredData } = action.payload;
            console.log("Filter Slice: ", action.payload);
            state.entity = name;
            state.filteredData = filteredData;
            state.status = filteredData.length > 0; // Status is true if there are results
            // state.filtered.entity = name;
            // state.filtered.data = filteredData;
            // state.filtered.status = filteredData.length > 0; // Status is true if there are results
            // console.log("Filter State: ", state.entity);
        },
    },
});

// export const { setData, setFiltered } = filterSlice.actions;
export const { setFiltered } = filterSlice.actions;
export default filterSlice.reducer;