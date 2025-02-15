import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: "handcrafted",
    categories: [],
    loading: false,
    // error: null
};

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setCategoryLoading: (state, action) => {
            state.loading = action.payload;
        },
        loadAllCategories: (state, action) => {
            state.categories = action.payload;
            state.loading = false;
            state.status = "succeeded";
            // state.error = null;
        },
        addNewCategory: (state, action) => {
            state.categories.categoriessData.push(action.payload.categoryData);
        },
        updateCategory: (state, action) => {
            const { _id } = action.payload.categoryData;
            state.categories.categoriessData = state.categories.categoriessData.map(item => item._id == _id ? { ...action.payload.categoryData } : item);
        },
        deleteCategory: (state, action) => {
            state.categories.categoriessData = state.categories.categoriessData.filter(category => category._id !== action.payload.categoryId);
        },
        filterCategories: (state, action) => {
            state.categories = action.payload;
            state.loading = false;
            state.status = "succeeded";
            // state.error = null;
        },
    }
});

export const { setCategoryLoading, setError, loadAllCategories, addNewCategory, updateCategory, deleteCategory, filterCategories } = categorySlice.actions;

export default categorySlice.reducer;