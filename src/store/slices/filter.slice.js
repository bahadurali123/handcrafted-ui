import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entity: null, // Name of the entity being filtered, e.g., "products"
    status: false, // Filter status: true if a filter is active
    filteredData: [], // Filtered results for the active entity
};

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setFiltered(state, action) {
            const { name, filteredData } = action.payload;
            state.entity = name;
            state.filteredData = filteredData;
            state.status = filteredData.length > 0; // Status is true if there are results
        },
    },
});

export const { setFiltered } = filterSlice.actions;
export default filterSlice.reducer;